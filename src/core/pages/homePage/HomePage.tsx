import {Welcome} from "@/core/pages/homePage/ui/Welcome/Welcome";
import {GalleryCirlce} from "@/core/pages/homePage/ui/GalleryCirlce/GalleryCirlce";
import s from "./HomePage.module.css";

export const HomePage = () => {
  return (
    <>
      <Welcome />
      <GalleryCirlce />
      <div style={{height: "100vh"}}></div>
    </>
  );
};
