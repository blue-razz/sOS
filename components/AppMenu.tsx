import type { NextPage } from "next";

const AppMenu: NextPage = () => {
  return (
    <div className="flex items-center align-middle space-x-6">
      <div className="font-bold">Looker</div>
      <div>File</div>
      <div>Edit</div>
      <div>View</div>
      <div>Go</div>
      <div>Window</div>
      <div>Help</div>
    </div>
  );
};

export default AppMenu;
