"use client";
import { useRouter } from "next/navigation";
import React from "react";
import Image from "next/image";
import { FaPlay } from "react-icons/fa";

interface ListItemProps {
  image: string;
  name: string;
  href: string;
}

const ListItem: React.FC<ListItemProps> = ({ image, name, href }) => {
  const router = useRouter();

  const onClick = () => {
    // add auth
    router.push(href);
  };
  return (
    <button onClick={onClick}
     className="relative group flex items-center rounded-md overflow-hidden gap-x-4 bg-neutral-100/10 hover:bg-neutral-100/20 transition pr-4">
      <div className="relative min-h-[64px] min-w-[64px]">
        <Image className="object-cover" src={image} fill alt="Image" />
      </div>
      <p className="font-medium py-5 truncate">{name}</p>
      <div className=" absolute transition opacity-0 rounded-full flex items-center justify-center  right-5 p-4 bg-green-500 drop-shadow-md hover:scale-110 group-hover:opacity-100">
        <FaPlay className="text-black"/>
      </div>
    </button>
  );
};

export default ListItem;
