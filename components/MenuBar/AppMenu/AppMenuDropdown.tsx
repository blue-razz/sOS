import type { NextPage } from "next";

interface IProps {
  children: React.ReactNode | React.ReactNode[];
}

const AppMenuDropdown: NextPage<IProps> = ({ children }) => {
  return (
    <div className="absolute flex flex-col gap-y-1 bg-slate-800 mix-blend-overlay backdrop-blur-3xl bg-clip-padding filter bg-opacity-70 px-3 py-1 rounded-md border-[1px] border-gray-400/20 shadow-lg">
      {children}
    </div>
  );
};

export default AppMenuDropdown;
