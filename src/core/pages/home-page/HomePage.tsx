import { WelcomeSection } from "@/core/pages/home-page/ui/WelcomeSection/WelcomeSection";
import { GalleryCircleSection } from "@/core/pages/home-page/ui/GalleryCirlceSection/GalleryCircleSection";
import { PhotosSection } from "@/core/pages/home-page/ui/PhotosSection/PhotosSection";
import { GuestExperienceSection } from "@/core/pages/home-page/ui/GuestExperience/GuestExperienceSection";
import { InteriorSection } from "@/core/pages/home-page/ui/InteriorSection/InteriorSection";
import { GastronomySection } from "@/core/pages/home-page/ui/GastronomySection/GastronomySection";
import { ArtGallerySection } from "@/core/pages/home-page/ui/ArtGallerySection/ArtGallerySection";
import { QuestionsSection } from "@/core/pages/home-page/ui/QuestionsSection/QuestionsSection";
import { NewFacets } from "./ui/NewFacets/NewFacets";

export const HomePage = () => {
  return (
    <>
      <WelcomeSection />
      <GalleryCircleSection />
      <PhotosSection />
      <GuestExperienceSection />
      <InteriorSection />
      <GastronomySection />
      <NewFacets />
      <ArtGallerySection />
      <QuestionsSection />
    </>
  );
};
