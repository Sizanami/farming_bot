"use client";

import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <div
      className="flex flex-row w-full md:px-10 justify-between bg-cover bg-center px-1"
      style={{ backgroundImage: 'url("/option_select.png")' }}
    >
      <div className="flex flex-col m-3 justify-between items-center text-center hover:bg-[#8cd98c]">
        <Link href={"/myland"}>
          <Image
            src={"/option_land.png"}
            width={100}
            height={100}
            alt="option_land"
          />
          <span className="text-xs text-white text-center">My Land</span>
        </Link>
      </div>
      <div className="flex flex-col m-3 justify-between items-center text-center hover:bg-[#8cd98c]">
        <Link href={"/inventory"}>
          <Image
            src={"/option_item.png"}
            width={100}
            height={100}
            alt="option_land"
          />
          <span className="text-xs text-white text-center">Inventory</span>
        </Link>
      </div>
      <div className="flex flex-col m-3 justify-between items-center text-center hover:bg-[#8cd98c]">
        <Link href={"/shop"}>
          <Image
            src={"/option_shop.png"}
            width={100}
            height={100}
            alt="option_land"
          />
          <span className="text-xs text-white text-center">Shop</span>
        </Link>
      </div>
      <div className="flex flex-col m-3 justify-between items-center text-center hover:bg-[#8cd98c]">
        <Link href={"/tasks"}>
          <Image
            src={"/option_task.png"}
            width={100}
            height={100}
            alt="option_land"
          />
          <span className="text-xs text-white text-center">Tasks</span>
        </Link>
      </div>
      <div className="flex flex-col m-3 justify-between items-center text-center hover:bg-[#8cd98c]">
        <Link href={"/refer"}>
          <Image
            src={"/option_refer.png"}
            width={100}
            height={100}
            alt="option_land"
          />
          <span className="text-xs text-white text-center">Referrals</span>
        </Link>
      </div>
    </div>
  );
}
