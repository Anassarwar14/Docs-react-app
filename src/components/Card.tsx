import React from "react";
import { FaRegFileAlt } from "react-icons/fa";
import { LuDownload } from "react-icons/lu";

function Card() {
  return (
    <>
      <div className="relative w-60 h-72 bg-zinc-300/80 rounded-[30px] px-8 py-10">
        <FaRegFileAlt />
        <p className="text-sm font-semibold leading-tight mt-8">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum
          nesciunt repudiandae aperiam alias.
        </p>
        <div className="footer absolute bottom-0 left-0 bg-sky-700 w-full rounded-b-[30px] overflow-hidden px-3 py-2 text-zinc-200">
          <div className="flex items-center justify-between mb-8">
            <h6>0.4 mb</h6>
            <span className="w-6 h-6 bg-zinc-200 rounded-full flex items-center justify-center">
              <LuDownload size="0.8em" color="#222" />
            </span>
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;
