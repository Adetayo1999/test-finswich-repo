import {
  BilliingTransactionHistory,
  BillingWalletInformation,
} from "@/components/wallets/WalletsUI";

const BillingWalletPage = () => {
  return (
    <div className="flex flex-col gap-y-20">
      <BillingWalletInformation />

      <BilliingTransactionHistory />
    </div>
  );
};

export default BillingWalletPage;
