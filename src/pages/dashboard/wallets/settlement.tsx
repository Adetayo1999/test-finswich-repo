import {
  SettlementTransactionHistory,
  SettlementWalletInformation,
} from "@/components/wallets/WalletsUI";

const SettlementWalletPage = () => {
  return (
    <div className="flex flex-col gap-y-20">
      <SettlementWalletInformation />
      <SettlementTransactionHistory />
    </div>
  );
};

export default SettlementWalletPage;
