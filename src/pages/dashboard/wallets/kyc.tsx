import {
  KYCTransactionHistory,
  KYCWalletInformation,
} from "@/components/wallets/WalletsUI";

const KycWalletPage = () => {
  return (
    <div className="flex flex-col gap-y-20">
      <KYCWalletInformation />
      <KYCTransactionHistory />
    </div>
  );
};

export default KycWalletPage;
