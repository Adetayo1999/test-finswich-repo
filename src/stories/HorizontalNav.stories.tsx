import type { Meta, StoryObj } from "@storybook/react-vite";

import HorizontalNav from "@/components/common/horizontal-nav";
import { type HorizontalNavProps } from "@/components/common/horizontal-nav";
import { BrowserRouter } from "react-router-dom";
import { ROUTES } from "@/routes/paths";

const WrappedHorizontalNav: React.FC<HorizontalNavProps> = (props) => (
  <BrowserRouter>
    <HorizontalNav {...props} />
  </BrowserRouter>
);

const meta = {
  title: "HorizontalNav",
  component: WrappedHorizontalNav,
} satisfies Meta<typeof WrappedHorizontalNav>;

const links = [
  {
    title: "All Apps",
    path: ROUTES.AUTH.LOGIN,
  },
  {
    title: "App Admin",
    path: ROUTES.AUTH.CHANGE_PASSWORD,
  },
  {
    title: "FAQs",
    path: ROUTES.AUTH.REGISTER,
  },
];

export default meta;

type Story = StoryObj<typeof meta>;

export const HorizontalNavStory: Story = { args: { links } };
