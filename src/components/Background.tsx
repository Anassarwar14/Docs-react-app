import React from "react";

function Background() {
  return (
    <>
      <div className="fixed z-[2] w-full h-screen">
        <div className="w-full py-8 flex justify-center items-center text-zinc-700 text-xl font-semibold bg-gradient-to-r from-indigo-500 from-10% via-purple-500 via-30% to-pink-500 to-80%">
          Documents.
        </div>
        <h1 className="leading-none tracking-tighter text-[13vw] absolute top-1/2 left-1/2 translate-y-[-50%] translate-x-[-50%] translate-x-1/2 text-zinc-800 font-semibold">
          DOCS.
        </h1>
      </div>
    </>
  );
}

export default Background;
