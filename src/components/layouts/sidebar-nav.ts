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

export const getSidebarNav = (appId: string): SidebarNavItem[] => [
  {
    path: ROUTES.DASHBOARD.OVERVIEW.ROOT(appId),
    icon: OverviewIcon,
    title: "Overview",
  },
  {
    path: ROUTES.DASHBOARD.WALLETS.ROOT(appId),
    icon: BriefcaseIcon,
    title: "Wallets",
    end: false,
  },
  {
    path: ROUTES.DASHBOARD.TRANSACTIONS.ROOT(appId),
    icon: TransactionsIcon,
    title: "Transactions",
    end: false,
  },
  {
    path: ROUTES.DASHBOARD.RESOLUTION.ROOT(appId),
    icon: ResolutionIcon,
    title: "Resolution",
    end: false,
  },
  {
    path: ROUTES.DASHBOARD.SERVICES.ROOT(appId),
    icon: CirclesIcon,
    title: "Services",
  },
  {
    path: ROUTES.DASHBOARD.CUSTOMERS.ROOT(appId),
    icon: CustomerIcon,
    title: "Customers",
  },
  {
    path: ROUTES.DASHBOARD.ESTORES.ROOT(appId),
    icon: ElectronicStoresIcon,
    title: "e-Stores",
    end: false,
  },
  {
    path: ROUTES.DASHBOARD.APP_BUILDER.ROOT(appId),
    icon: AppBuilderIcon,
    title: "App Builder",
  },
  {
    path: ROUTES.DASHBOARD.BILLING.ROOT(appId),
    icon: BillingIcon,
    title: "Billing",
  },
  {
    path: ROUTES.DASHBOARD.SETTINGS.ROOT(appId),
    icon: SettingsIcon,
    title: "Settings",
    end: false,
  },
];
