import type { NextPage } from "next";
import DockDivider from "./DockDivider";
import DockItem from "./DockItem";

interface IProps {
  children: React.ReactNode | React.ReactNode[];
}

const Dock: NextPage<IProps> = ({ children }) => {
  return (
    <div className=" flex  p-2 pb-[0.6rem] shadow-sm self-center mb-2 rounded-xl backdrop-filter backdrop-blur-lg bg-white/25 border-[0.875px] border-gray-300/30 gap-x-3">
      {children}
    </div>
  );
};

export default Dock;
