import {
  TransactionHistory,
  TransactionsInformation,
} from "@/components/transactions/transactionsUI";

const PayinPage = () => {
  return (
    <div className="flex flex-col gap-y-20">
      <TransactionsInformation />
      <TransactionHistory />
    </div>
  );
};

export default PayinPage;
