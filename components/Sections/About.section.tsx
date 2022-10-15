import type { NextComponentType } from "next";

import Image from "next/image";
import Link from "next/link";

import { HiOutlineArrowNarrowRight } from "../Misc/Icons.collection";

const About: NextComponentType = () => {
  return (
    <div className="my-8 flex flex-row items-center justify-between px-3 font-sen">
      <div>
        <p className="text-3xl font-bold text-white">Okera Johnson</p>
        <p className="mt-1 text-lg text-gray-300">
          Fullstack Developer
        </p>

        <p className="mt-4 text-gray-400">
          Developing websites, applications and tools. Creating tools and websites <br /> to launch
          online businesss for myself and clients.
        </p>

        <Link href="https://okerajohnson.com" passHref>
          <a
            className="mt-4 flex cursor-pointer flex-row items-center gap-1 font-jost text-xl text-gray-400 duration-100 hover:ml-2"
            target="_blank"
            rel="noopener noreferrer"
          >
            Checkout my Blog
            <HiOutlineArrowNarrowRight />
          </a>
        </Link>

        
      </div>

      <div className="hidden custom:block">
        <Image
          src="/assests/avatar.jpeg"
          width="112"
          height="112"
          className="rounded-full"
          alt="avatar"
        />
      </div>
    </div>
  );
};

export default About;
