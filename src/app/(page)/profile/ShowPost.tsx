import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import up from "./../../../../public/uper.png";
import down from "./../../../../public/downer.png";
import comment from "./../../../../public/comment.png";
import dots from "./../../../../public/dots.png"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@radix-ui/react-dropdown-menu";
const Post = (props: any) => {
  return (
    <div className="px-5 py-5 border rounded-md">
      <div className="flex justify-between">
        <div className="flex items-center text-sm gap-2">
          <Avatar className="w-7 h-7 text-xs">
            <AvatarImage src={props.proPhoto} />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <div className="font-semibold">{props.username}</div>

          <div className="ml-2 font-semibold">{props.topic}</div>
        </div>
        <div className="flex ">
          <Button className="bg-red-700 font-bold text-sm h-6 rounded-full">
            Join
          </Button>
          <DropdownMenu>
            <DropdownMenuTrigger className="ml-2 focus:ring-0 focus:border-none">
            <Image  src={dots} className="w-6 h-6" alt=""></Image>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="bg-zinc-900 py-3 px-3 rounded-md relative top-2 border-zinc-700 border ">
              <DropdownMenuItem className="mb-2 bg-zinc-800 px-10 py-1 flex rounded-md"><Image  src={dots} className="w-6 h-6" alt=""></Image> Edit</DropdownMenuItem>
              <DropdownMenuItem className="mb-2 bg-zinc-800 px-10 py-1 flex rounded-md">delete</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
      <div className="text-lg line-clamp-1 mt-2 font-semibold">
        {props.title}
      </div>

      <div className="h-[50vh] relative flex items-center justify-center w-full  rounded-md mt-2">
        <div className=" hover:line-clamp-none absolute w-full bottom-0 p-5 rounded-b-md left-0 bg-zinc-900/50 mt-1">
          <div className="line-clamp-3">{props.content}</div>
        </div>
        <Image
          className="max-h-full h-auto w-auto max-w-full rounded-md border border-zinc-500 overflow-hidden"
          width={1000}
          height={1000}
          src={props.image}
          alt=""
        ></Image>
      </div>
      <div className="flex gap-5 mt-3 items-center">
        <button className="bg-zinc-700 gap-1 flex items-center hover:bg-zinc-700 text-white font-bold h-8  rounded-full">
          <div className="h-8 w-10 justify-center rounded-full items-center hover:bg-red-700 flex">
            <Image className="h-4 w-5 " src={up} alt=""></Image>
          </div>
          {props.vote}
          <div className="h-8 w-10 justify-center rounded-full items-center hover:bg-red-700 flex">
            <Image className="h-4 w-5 " src={down} alt=""></Image>
          </div>
        </button>
        <Button className="bg-zinc-700 items-center gap-1 text-white font-bold text-sm h-8 rounded-full">
          <Image
            className="h-4 w-4 mr-1 relative top-[2px]"
            src={comment}
            alt=""
          ></Image>
          175
        </Button>
      </div>
    </div>
  );
};

export default Post;
