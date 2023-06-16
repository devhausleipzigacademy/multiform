import TodoProvider from "@/context/TodoProvider";
import React from "react";

interface Props {
  children: React.ReactNode;
}

function Providers({ children }: Props) {
  return (
    <>
      <TodoProvider>{children}</TodoProvider>
    </>
  );
}

export default Providers;
