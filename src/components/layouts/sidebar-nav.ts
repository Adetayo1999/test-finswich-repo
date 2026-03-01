import type { IconType } from "@/assets/icons/types";
import {
  AppBuilderIcon,
  BillingIcon,
  BriefcaseIcon,
  CirclesIcon,
  CustomerIcon,
  ElectronicStoresIcon,
  OverviewIcon,
  ResolutionIcon,
  SettingsIcon,
  TransactionsIcon,
} from "@/assets/icons/sidebar-icons";
import { ROUTES } from "@/routes/paths";

export type SidebarNavItem = {
  path: string;
  icon: React.ComponentType<IconType>;
  title: string;
  end?: boolean;
};

export const SIDEBAR_NAV: SidebarNavItem[] = [
  { path: ROUTES.DASHBOARD.OVERVIEW.ROOT, icon: OverviewIcon, title: "Overview" },
  {
    path: ROUTES.DASHBOARD.WALLETS.ROOT,
    icon: BriefcaseIcon,
    title: "Wallets",
    end: false,
  },
  {
    path: ROUTES.DASHBOARD.TRANSACTIONS.ROOT,
    icon: TransactionsIcon,
    title: "Transactions",
    end: false,
  },
  {
    path: ROUTES.DASHBOARD.RESOLUTION.ROOT,
    icon: ResolutionIcon,
    title: "Resolution",
    end: false,
  },
  { path: ROUTES.DASHBOARD.SERVICES.ROOT, icon: CirclesIcon, title: "Services" },
  { path: ROUTES.DASHBOARD.CUSTOMERS.ROOT, icon: CustomerIcon, title: "Customers" },
  {
    path: ROUTES.DASHBOARD.ESTORES.ROOT,
    icon: ElectronicStoresIcon,
    title: "e-Stores",
    end: false,
  },
  { path: ROUTES.DASHBOARD.APPS.ROOT, icon: AppBuilderIcon, title: "Apps" },
  { path: ROUTES.DASHBOARD.BILLING.ROOT, icon: BillingIcon, title: "Billing" },
  {
    path: ROUTES.DASHBOARD.SETTINGS.ROOT,
    icon: SettingsIcon,
    title: "Settings",
    end: false,
  },
];
