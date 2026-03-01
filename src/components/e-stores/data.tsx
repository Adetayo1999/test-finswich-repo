import { createColumnHelper } from "@tanstack/react-table";
import { CopyableText } from "../common/copyable-text";

export const mockStoresData = [
  {
    id: "1",
    store_name: "Johny Stores...",
    products: "32",
    fee: "$0.2",
    product: "Quick Vast",
    store_url: "https://ebi..",
    email: "grace.yo@spring.td",
    user_phone: "+2347036714538",
    timestamp: "12:45 / Apr 12, 2025",
  },
  {
    id: "2",
    store_name: "Ebbiade Stores",
    products: "44",
    fee: "$0.2",
    product: "Quick Vast",
    store_url: "https://ebi..",
    email: "grace.yo@spring.td",
    user_phone: "+2347036714538",
    timestamp: "12:45 / Apr 12, 2025",
  },
  {
    id: "3",
    store_name: "Ebonno Technol..",
    products: "120",
    fee: "$0.2",
    product: "Quick Vast",
    store_url: "https://ebi..",
    email: "grace.yo@spring.td",
    user_phone: "+2347036714538",
    timestamp: "12:45 / Apr 12, 2025",
  },
];

const storesColumnHelper =
  createColumnHelper<(typeof mockStoresData)[0]>();

export const storesColumns = [
  storesColumnHelper.accessor("store_name", {
    header: "Store Name",
    cell: (info) => (
      <div className="flex items-center gap-2">
        <span className="w-2 h-2 rounded-sm bg-[#9D9EA2] shrink-0" />
        <span>{info.getValue()}</span>
      </div>
    ),
  }),
  storesColumnHelper.accessor("products", {
    header: "Products",
    cell: (info) => <p>{info.getValue()}</p>,
  }),
  storesColumnHelper.accessor("fee", {
    header: "Fee",
    cell: (info) => <p>{info.getValue()}</p>,
  }),
  storesColumnHelper.accessor("product", {
    header: "Product",
    cell: (info) => <p>{info.getValue()}</p>,
  }),
  storesColumnHelper.accessor("store_url", {
    header: "Store URL",
    cell: (info) => (
      <div className="flex items-center gap-2">
        <CopyableText text={info.getValue()} className="max-w-24" />
        <span className="w-2 h-2 rounded-sm bg-[#9D9EA2] shrink-0" />
      </div>
    ),
  }),
  storesColumnHelper.accessor("email", {
    header: "Email",
    cell: (info) => <p>{info.getValue()}</p>,
  }),
  storesColumnHelper.accessor("user_phone", {
    header: "User Phone",
    cell: (info) => <p>{info.getValue()}</p>,
  }),
  storesColumnHelper.accessor("timestamp", {
    header: "Timestamp",
    cell: (info) => <p>{info.getValue()}</p>,
  }),
];

export const mockCatalogsData = [
  {
    id: "1",
    store_name: "Johny Stores...",
    catalog_name: "Electronics",
    product: "32",
    email: "grace.yo@spring.td",
    user_phone: "+2347036714538",
    timestamp: "12:45 / Apr 12, 2025",
  },
  {
    id: "2",
    store_name: "Ebbiade Stores",
    catalog_name: "Phones",
    product: "13",
    email: "grace.yo@spring.td",
    user_phone: "+2347036714538",
    timestamp: "12:45 / Apr 12, 2025",
  },
  {
    id: "3",
    store_name: "Ebonno Technol..",
    catalog_name: "Chargers",
    product: "45",
    email: "grace.yo@spring.td",
    user_phone: "+2347036714538",
    timestamp: "12:45 / Apr 12, 2025",
  },
];

const catalogsColumnHelper =
  createColumnHelper<(typeof mockCatalogsData)[0]>();

export const catalogsColumns = [
  catalogsColumnHelper.accessor("store_name", {
    header: "Store Name",
    cell: (info) => (
      <div className="flex items-center gap-2">
        <span className="w-2 h-2 rounded-sm bg-[#9D9EA2] shrink-0" />
        <span>{info.getValue()}</span>
      </div>
    ),
  }),
  catalogsColumnHelper.accessor("catalog_name", {
    header: "Catalog Name",
    cell: (info) => <p>{info.getValue()}</p>,
  }),
  catalogsColumnHelper.accessor("product", {
    header: "Product",
    cell: (info) => <p>{info.getValue()}</p>,
  }),
  catalogsColumnHelper.accessor("email", {
    header: "Email",
    cell: (info) => <p>{info.getValue()}</p>,
  }),
  catalogsColumnHelper.accessor("user_phone", {
    header: "User Phone",
    cell: (info) => <p>{info.getValue()}</p>,
  }),
  catalogsColumnHelper.accessor("timestamp", {
    header: "Timestamp",
    cell: (info) => <p>{info.getValue()}</p>,
  }),
];
