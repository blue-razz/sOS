import type { NextPage } from "next";

const DockItem: NextPage = () => {
  return (
    <div className="flex w-[45px] h-[45px] rounded-xl bg-blue-500 shadow-md hover:scale-110 hover:-translate-y-[0.5rem] transition-all duration-100 ease-in-out"></div>
  );
};

export default DockItem;
