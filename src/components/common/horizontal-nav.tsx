import clsx from "clsx";
import { NavLink } from "react-router-dom";

type HorizontalNavLinkType = {
  title: string;
  path: string;
};

export type HorizontalNavProps = {
  links: Array<HorizontalNavLinkType>;
};

const HorizontalNav: React.FC<HorizontalNavProps> = (props) => {
  return (
    <div className="border-b border-[#E4E7EC] flex gap-x-10">
      {props.links.map((item, idx) => (
        <NavLink
          key={idx}
          to={item.path}
          className={({ isActive }) =>
            clsx(
              "text-xs border-b min-w-22 flex justify-center font-medium items-center pb-3",
              isActive
                ? "text-[#712EEB]  border-[#712EEB]"
                : "text-[#344054] border-transparent",
            )
          }
        >
          {item.title}
        </NavLink>
      ))}
    </div>
  );
};

export default HorizontalNav;
