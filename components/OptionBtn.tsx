"use client";

import Link from "next/link";
import Image from "next/image";

const OptionBtn = () => {
  return (
    <div className="flex flex-row justify-between pt-5 px-3 md:px-10">
      <Link href="/shop" className="flex text-center items-center relative">
        <Image
          src="/btn_option.png"
          width={100}
          height={100}
          alt="btn_option"
          className="w-auto h-auto md:w-[300px]"
        />
        <p className="absolute  md:text-md text-sm md:text-6xl hover:text-green-500 md:ml-[90px] font-semibold ml-5">
          Plot
        </p>
      </Link>
      <Link href="/shop/seedlings" className="flex items-center relative">
        <Image
          src="/btn_option.png"
          width={100}
          height={100}
          alt="btn_option"
          className="w-auto h-auto md:w-[300px]"
        />
        <p className="absolute  md:text-md text-sm md:text-6xl hover:text-green-500 md:ml-[20px] font-semibold  ml-2">
          Seedlings
        </p>
      </Link>
      <Link href="/shop/cans" className="flex items-center relative">
        <Image
          src="/btn_option.png"
          width={100}
          height={100}
          alt="btn_option"
          className="w-auto h-auto md:w-[300px]"
        />
        <p className="absolute  md:text-md text-sm md:text-6xl hover:text-green-500 md:ml-[90px] font-semibold ml-5">
          Cans
        </p>
      </Link>
      <Link href="/shop/tokens" className="flex items-center relative">
        <Image
          src="/btn_option.png"
          width={100}
          height={100}
          alt="btn_option"
          className="w-auto h-auto md:w-[300px]"
        />
        <p className="absolute  md:text-md text-sm md:text-6xl hover:text-green-500 md:ml-[60px] font-semibold ml-5">
          Tokens
        </p>
      </Link>
    </div>
  );
};

export default OptionBtn;
