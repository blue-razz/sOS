import Dock from "@components/Dock/Dock";
import DockDivider from "@components/Dock/DockDivider";
import DockItem from "@components/Dock/DockItem";
import MenuBar from "@components/MenuBar/MenuBar";
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

        <Dock>
          <DockItem />
          <DockItem />
          <DockItem />
          <DockItem />
          <DockDivider />
          <DockItem />
          <DockItem />
          <DockItem />
          <DockDivider />
          <DockItem />
          <DockItem />
        </Dock>
      </div>
    </>
  );
};

export default Index;
