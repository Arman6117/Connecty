import React from "react";
import Sidebar from "./chats/component/Sidebar";
import OptionsBar from "./chats/component/OptionsBar";

const layout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <section className="h-screen w-screen  p-1 ">
      <main className="flex  h-full w-full space-x-1  " style={{ borderRadius: "6px" }}>
        <div>
          <Sidebar />
        </div>
        <div>
          <OptionsBar/>
        </div>
        {children}
      </main>
    </section>
  );
};

export default layout;
