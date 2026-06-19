import { useEffect } from "react";
import { Controller, useForm } from "react-hook-form";
import {
  AuthActionButton,
  AuthInput,
  AuthSplitCard,
  AuthToggle,
} from "@/components/auth/AuthUI";
import { AuthPhoneInput } from "@/components/auth/AuthPhoneInput";
import { useRegisterMerchant } from "@/hooks/api/useRegisterMerchant";
import { useCountries } from "@/hooks/useCountries";
import { ROUTES } from "@/routes/paths";
import { useNavigate, Link } from "react-router-dom";
import toast from "react-hot-toast";
import { saveRegistrationSession } from "@/lib/registration-session";
import { saveVerificationEmail } from "@/lib/verify-account";
import {
  buildFullPhone,
  REGISTER_DEFAULT_COUNTRY,
  registerFormRules,
  validatePhone,
  type RegisterFormValues,
} from "./register-form";

function Register() {
  const navigate = useNavigate();
  const { data: countries = [], isLoading: countriesLoading, isError: countriesError } =
    useCountries();
  const registerMutation = useRegisterMerchant();

  const {
    register,
    control,
    handleSubmit,
    setValue,
    getValues,
    formState: { errors },
  } = useForm<RegisterFormValues>({
    mode: "onTouched",
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      country: REGISTER_DEFAULT_COUNTRY,
      phone: "",
      password: "",
    },
  });

  useEffect(() => {
    if (countries.length === 0) return;

    const current = getValues("country");
    const hasSelected = countries.some((country) => country.code === current);
    if (hasSelected) return;

    const defaultCountry =
      countries.find((country) => country.code === REGISTER_DEFAULT_COUNTRY) ??
      countries[0];
    setValue("country", defaultCountry.code);
  }, [countries, getValues, setValue]);

  const onSubmit = (data: RegisterFormValues) => {
    const selectedCountry = countries.find(
      (country) => country.code === data.country,
    );

    if (!selectedCountry) {
      toast.error("Please wait for countries to load");
      return;
    }

    registerMutation.mutate(
      {
        email: data.email.trim(),
        firstName: data.firstName.trim(),
        lastName: data.lastName.trim(),
        country: data.country,
        password: data.password,
        phone: buildFullPhone(selectedCountry.dialCode, data.phone),
      },
      {
        onSuccess: (response) => {
          saveRegistrationSession(response.data);
          saveVerificationEmail(response.data.email);
          toast.success(response.message);
          navigate(ROUTES.AUTH.VERIFY_OTP, {
            state: {
              email: response.data.email,
            },
          });
        },
        onError: (error) => {
          toast.error(
            error instanceof Error ? error.message : "Registration failed",
          );
        },
      },
    );
  };

  const phoneError = errors.phone?.message ?? errors.country?.message;

  return (
    <AuthSplitCard>
      <>
        <AuthToggle
          active="secondary"
          primary={{ label: "I’ve an account", to: ROUTES.AUTH.LOGIN }}
          secondary={{ label: "Register", to: ROUTES.AUTH.REGISTER }}
        />
        <form onSubmit={handleSubmit(onSubmit)} noValidate>
          <div className="mb-4 md:mb-6">
            <h1 className="font-medium text-xl md:text-3xl text-[#4F4F4F] mb-1">
              Let&apos;s get started!
            </h1>
            <p className="text-[#969696] text-xs md:text-sm">
              Join the network of businesses powered by Finswich
            </p>
          </div>
          <div className="flex flex-col gap-y-4 md:gap-y-5">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5">
              <AuthInput
                icon="user"
                label="First Name"
                placeholder="Your first name"
                autoComplete="given-name"
                disabled={registerMutation.isPending}
                error={errors.firstName?.message}
                {...register("firstName", registerFormRules.firstName)}
              />
              <AuthInput
                icon="user"
                label="Last Name"
                placeholder="Your last name"
                autoComplete="family-name"
                disabled={registerMutation.isPending}
                error={errors.lastName?.message}
                {...register("lastName", registerFormRules.lastName)}
              />
            </div>
            <AuthInput
              icon="mail"
              label="Email Address"
              placeholder="Your email address"
              type="email"
              autoComplete="email"
              disabled={registerMutation.isPending}
              error={errors.email?.message}
              {...register("email", registerFormRules.email)}
            />
            <Controller
              name="country"
              control={control}
              rules={registerFormRules.country}
              render={({ field: countryField }) => (
                <Controller
                  name="phone"
                  control={control}
                  rules={{
                    validate: (value) =>
                      validatePhone(value, countryField.value, countries),
                  }}
                  render={({ field: phoneField }) => (
                    <AuthPhoneInput
                      label="Phone Number"
                      countryCode={countryField.value}
                      onCountryChange={countryField.onChange}
                      onCountryBlur={countryField.onBlur}
                      phone={phoneField.value}
                      onPhoneChange={phoneField.onChange}
                      onPhoneBlur={phoneField.onBlur}
                      countries={countries}
                      loading={countriesLoading}
                      loadError={
                        countriesError ? "Unable to load countries. Refresh the page to try again." : undefined
                      }
                      disabled={registerMutation.isPending}
                      error={phoneError}
                    />
                  )}
                />
              )}
            />
            <AuthInput
              icon="lock"
              label="Password"
              placeholder="Your account password"
              type="password"
              autoComplete="new-password"
              disabled={registerMutation.isPending}
              error={errors.password?.message}
              {...register("password", registerFormRules.password)}
            />
            <div className="mt-4">
              <AuthActionButton
                loading={registerMutation.isPending}
                disabled={countriesLoading}
              >
                Create an account
              </AuthActionButton>
            </div>
            <div>
              <p className="text-xs md:text-sm text-[#ABABBA]">
                Already have an account?{" "}
                <Link className="font-bold text-[#23232B]" to={ROUTES.AUTH.LOGIN}>
                  Proceed to login
                </Link>
              </p>
            </div>
          </div>
        </form>
      </>
    </AuthSplitCard>
  );
}

export default Register;
