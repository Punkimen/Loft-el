import {Welcome} from "@/core/pages/homePage/ui/Welcome/Welcome";
import {GalleryCirlce} from "@/core/pages/homePage/ui/GalleryCirlce/GalleryCirlce";

export const HomePage = () => {
  return (
    <>
      <Welcome />
      <GalleryCirlce />
      <div style={{height: "1000vh"}}></div>
    </>
  );
};
