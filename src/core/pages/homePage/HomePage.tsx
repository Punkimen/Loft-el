import {Welcome} from "@/core/pages/homePage/ui/Welcome/Welcome";
import {GalleryCirlce} from "@/core/pages/homePage/ui/GalleryCirlce/GalleryCirlce";
import {Photos} from "@/core/pages/homePage/ui/Photos/Photos";
export const HomePage = () => {
  return (
    <>
      <Welcome />
      <GalleryCirlce />
      <Photos />
      <div style={{height: "100vh"}}></div>
    </>
  );
};
