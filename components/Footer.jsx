import React from "react";
import { GlobeIcon } from "@heroicons/react/solid";

const Footer = () => {
  return (
    <footer className="absolute bottom-0 w-full flex flex-col items-center bg-[#f2f2f2] px-10 py-4">
      {/* get rid of on large screens and bring it up between two divs below */}
      {/* could use grid and col-start to only show this div once but felt like flexbox is simplest */}
      <div className="flex lg:hidden footerLinks">
        <GlobeIcon className="h-5 text-green-500 mr-1 mb-5" />
        Carbon neutral since 2007
      </div>

      <div className="flex flex-col space-y-6 sm:space-y-0 justify-evenly xl:justify-between items-center w-full sm:flex-row">
        <div className="flex flex-1 justify-center lg:justify-start space-x-6">
          <p className="footerLinks">Advertising</p>
          <p className="footerLinks">Business</p>
          <p className="footerLinks">How Search works</p>
        </div>

        {/* only shows on large screens */}
        <div className="flex-1 items-center justify-center hidden lg:inline-flex footerLinks">
          <GlobeIcon className="h-5 text-green-500 mr-1" />
          Carbon neutral since 2007
        </div>

        <div className="flex flex-1 justify-center lg:justify-end space-x-6">
          <p className="footerLinks">Privacy</p>
          <p className="footerLinks">Terms</p>
          <p className="footerLinks">Settings</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
