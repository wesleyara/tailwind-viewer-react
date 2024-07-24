import { Popover, PopoverButton, PopoverPanel } from "@headlessui/react";
import React, { useState } from "react";
import { FaExpand } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import "../../styles/globals.css";

const isProd = process.env.NODE_ENV === "production";

export const TailwindViewer = () => {
  const [isExpandedOpen, setIsExpandedOpen] = useState(false);

  return (
    <>
      {!isProd && (
        <Popover className="relative">
          <PopoverButton className="btn">
            <RiTailwindCssFill color="#38BDF8" size={24} />
          </PopoverButton>
          <PopoverPanel
            anchor="bottom"
            className={`container ${isExpandedOpen ? "expanded" : ""}`}
          >
            <span className="btn-box">
              <button
                className="btn-actions"
                onClick={() => setIsExpandedOpen(prev => !prev)}
              >
                <FaExpand size={18} />
              </button>
            </span>
            <iframe
              src="https://rogden.github.io/tailwind-config-viewer/"
              className="frame"
            ></iframe>
          </PopoverPanel>
        </Popover>
      )}
    </>
  );
};
