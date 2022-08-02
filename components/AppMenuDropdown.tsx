import type { NextPage } from "next";

interface IProps {
  menuItems: string[];
}

const AppMenuDropdown: NextPage<IProps> = ({ menuItems }) => {
  return (
    <div className="absolute flex flex-col w-64 bg-slate-700 mix-blend-overlay bg-opacity-60 rounded-md border-[0.875px] border-gray-300/30 shadow-lg">
      {menuItems.map((item) => (
        <p>{item}</p>
      ))}
    </div>
  );
};

export default AppMenuDropdown;
