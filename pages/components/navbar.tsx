import Image from "next/image";
import Link from "next/link";
import React from "react";
import IconMenu from "./menu";

const Navbar = () => {
  return (
    <div className="w-full bg-white">
      <div className="container mx-auto">
        <div className="flex items-center justify-between p-3">
          <div>
            <Link href="#">
              <p>
                <Image src="/logo.png" width={33} height={25} alt="" />
              </p>
            </Link>
          </div>
          <div className="flex items-center">
            <p className="text-[8px] font-[400] mr-3">Русский</p>
            <Image src='/img.jpg' width={35} height={35} className="mr-5 rounded-full" alt='' />
            <IconMenu />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
