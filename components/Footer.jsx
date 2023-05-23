import React from "react";
import { EventBackgroundEnum } from "./Constants";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <section
      className={`w-full p-5 pb-10 px-20 grid grid-cols-3 gap-6 min-h-[226px] ${EventBackgroundEnum.BLACK}`}
    >
      <div className="flex flex-row gap-4 justify-between items-center w-full col-span-3">
        <Link href="/" className="flex gap-2 flex-center">
          <Image
            src="/assets/images/ticketexpress.svg"
            alt="Ticket Express"
            width={235}
            height={50}
            className="object-contain"
          />
        </Link>
        {/* <div className="flex-1"/> */}
        {navlink?.map((item, index) => (
          <Link
            href={item?.url}
            key={index}
            className="flex flex-row justify-center items-center text-[16px] font-bold text-white"
          >
            {item?.linktitle}
          </Link>
        ))}
      </div>
    </section>
  );
};

export default Footer;

const navlink = [
  {
    linktitle: "Home",
    url: "/",
  },
  {
    linktitle: "Events",
    url: "/events",
  },
  {
    linktitle: "Sales",
    url: "/sales",
  },
];
