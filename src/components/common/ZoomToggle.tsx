import { useState } from "react";
import { FaMagnifyingGlass } from "react-icons/fa6";
import clsx from "clsx";

const ZOOM_CLASS = "zoom-in";

export const ZoomToggle = () => {
  const [zoomedIn, setZoomedIn] = useState(
    () => document.documentElement.classList.contains(ZOOM_CLASS),
  );

  const toggle = () => {
    document.documentElement.classList.toggle(ZOOM_CLASS);
    setZoomedIn((prev) => !prev);
  };

  return (
    <button
      type="button"
      onClick={toggle}
      title={zoomedIn ? "Zoom out" : "Zoom in"}
      className={clsx(
        "fixed bottom-6 right-6 z-50 flex h-12 w-12 items-center justify-center rounded-full border border-[#E4E7EC] bg-white shadow-lg text-[#555] hover:bg-[#F7F9FB] hover:border-[#767680]/40 transition-colors",
      )}
      aria-label={zoomedIn ? "Zoom out" : "Zoom in"}
    >
      <FaMagnifyingGlass className={clsx("w-5 h-5", zoomedIn && "text-[#712EEB]")} />
    </button>
  );
};
