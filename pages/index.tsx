import MenuBar from "@components/MenuBar";
import type { NextPage } from "next";

const Index: NextPage = () => {
  return (
    <>
      {/* This will be justify-between until the desktop portion is implemented */}
      <div
        className="min-h-screen w-full flex flex-col justify-between"
        id="desktop"
      >
        <MenuBar />

        <div className=" flex  p-2 shadow-sm self-center mb-2 rounded-xl backdrop-filter backdrop-blur-lg bg-white/25 border-[0.875px] border-gray-300/30 gap-x-3">
          <div className="flex w-[45px] h-[45px] rounded-lg bg-blue-500 shadow-sm"></div>
          <div className="flex w-[45px] h-[45px] rounded-lg bg-rose-500 shadow-sm"></div>
          <div className="flex w-[45px] h-[45px] rounded-lg bg-green-500 shadow-sm"></div>
          <div className="flex w-[45px] h-[45px] rounded-lg bg-violet-500 shadow-sm"></div>
          <div className="flex w-[45px] h-[45px] rounded-lg bg-red-500 shadow-sm"></div>
          <div className="flex w-[45px] h-[45px] rounded-lg bg-orange-500 shadow-sm"></div>
          <div className="flex h-[45px] w-[1px] bg-gray-900/70"></div>
        </div>
      </div>
    </>
  );
};

export default Index;
