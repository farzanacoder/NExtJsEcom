import React from "react";
import Flex from "../components/Flex";
import { IoStar } from "react-icons/io5";
import Image from "next/image";
import Link from "next/link";

const CartItem = ({ data, className }) => {
  return (
    <Link href={`/products/${data.id}`} className="relative overflow-hidden group rounded-md w-[170px] md:w-[205px] h-[390px] shadow-sm border border-gray-300">
      <Image
        src={data.thumbnail || "/fallback.png"}
        alt='img'
        width={300}
        height={200}
        className="w-full h-[200px] object-cover duration-150 transition-transform rounded-none cursor-pointer hover:scale-105"
      />
      <Flex
        className={`${className} pl-3.5 absolute top-44 h-[200px] flex-col text-left gap-1 items-start justify-center`}
      >
        <h1 className="text-sm mb-1 text-gray-500 hover:text-red duration-300 cursor-pointer">
          {data.title}
        </h1>
        <h1 className="md:text-sm text-[12px] mb-2 w-full font-mont font-semibold hover:text-red duration-300 cursor-pointer">
          {data.category}
        </h1>
        <Flex className="gap-1 text-yellow-500">
          <IoStar />
          <IoStar />
          <IoStar />
          <IoStar />
          <IoStar />
        </Flex>

        <Flex className="gap-9 pt-1.5 pb-5">
          <del className="md:text-base text-[12px] text-gray-600 font-semibold">
            {data.price}
          </del>
          <p className="md:text-base text-[12px] text-red font-semibold">
            {data.oldPrice}
          </p>
        </Flex>
        <button
          className="font-semibold border rounded-md px-6 md:px-9 py-2 text-red
       hover:text-white hover:bg-black hover:border-black overflow-hidden uppercase 
       md:text-sm text-[12px] cursor-pointer duration-300"
        >
          add to card
        </button>
      </Flex>
    </Link>
  );
};

export default CartItem;
