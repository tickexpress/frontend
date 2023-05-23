"use client";
import Link from "next/link";
import Image from "next/image";

const Nav = () => {
  const isUserLoggedIn = true;

  return (
    <nav className="flex-between w-full pt-10 pb-10 z-10">
      <Link href="/" className="flex gap-2 flex-center">
        <Image
          src="/assets/images/ticketexpress.svg"
          alt="Ticket Express"
          width={235}
          height={50}
          className="object-contain"
        />
        <p className="logo_text"></p>
      </Link>
      {navlink?.map((item, index) => (
        <Link
          href={item?.url}
          key={index}
          className="flex flex-row justify-center items-center text-[16px] font-bold bg-gradient-to-r from-[#2472FF] to-[#7E51DB] bg-clip-text"
        >
          {item?.linktitle}
        </Link>
      ))}

      <div className="sm:flex hidden">
        {isUserLoggedIn ? (
          <Link
            href="/create-prompt"
            className="flex-row justify-center items-center w-[200px] p-[18px] text-white text-sm rounded-lg bg-gradient-to-r from-[#2472FF] to-[#7E51DB] inline-flex"
          >
            <Image
              src="/assets/images/solar_wallet-linear.svg"
              alt="Ticket Express"
              width={24}
              height={24}
              className="object-contain"
            />
            <span className="pl-4">Connect Wallet</span>
          </Link>
        ) : (
          <></>
        )}
      </div>
    </nav>
  );
};

export default Nav;

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
