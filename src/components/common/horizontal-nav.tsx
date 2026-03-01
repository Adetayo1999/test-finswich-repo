import clsx from "clsx";
import { NavLink } from "react-router-dom";

type HorizontalNavLinkType = {
  title: string;
  path: string;
  end?: boolean;
};

export type HorizontalNavProps = {
  links: Array<HorizontalNavLinkType>;
  variant?: "light" | "dark";
};

const HorizontalNav: React.FC<HorizontalNavProps> = ({
  variant = "dark",
  ...props
}) => {
  return (
    <div
      className={clsx(
        "border-b flex gap-x-14",
        variant === "dark" ? "border-[#F2F2F2]" : "border-[#E4E7EC]",
      )}
    >
      {props.links.map((item, idx) => {
        if (variant === "dark") {
          return (
            <NavLink
              key={idx}
              to={item.path}
              end={item.end}
              className={({ isActive }) =>
                clsx(
                  "text-base border-b-2 -my-0.5 min-w-32 flex justify-center  items-center pb-3",
                  isActive
                    ? "text-[#11151F]  border-[#0243EC] font-semibold"
                    : "text-[#9D9EA2] border-transparent",
                )
              }
            >
              {item.title}
            </NavLink>
          );
        }

        return (
          <NavLink
            key={idx}
            to={item.path}
            end={item.end}
            className={({ isActive }) =>
              clsx(
                "text-base border-b min-w-22 flex justify-center font-medium items-center pb-3",
                isActive
                  ? "text-[#712EEB]  border-[#712EEB]"
                  : "text-[#344054] border-transparent",
              )
            }
          >
            {item.title}
          </NavLink>
        );
      })}
    </div>
  );
};

export default HorizontalNav;
