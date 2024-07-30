import {FC, ReactNode} from "react";
import {Header, Nav} from "@/core/widgets";
import {Providers} from "@/core/app";
import {Footer} from "@/core/widgets/Footer/ui/Footer";

export const Layout: FC<{children: ReactNode}> = ({children}) => {
  return (
    <Providers>
      <div className={"layout"}>
        <Header />
        <Nav />
        <main>{children}</main>
        <Footer />
      </div>
    </Providers>
  );
};
