import {FC, ReactNode} from "react";
import {Header, Nav} from "@/core/widgets";
import {Providers} from "@/core/app";

export const Layout: FC<{children: ReactNode}> = ({children}) => {
  return (
    <Providers>
      <div className={"layout"}>
        <Header />
        <Nav />
        <main>{children}</main>
      </div>
    </Providers>
  );
};
