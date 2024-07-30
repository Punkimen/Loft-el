import {WelcomeSection} from "@/core/pages/homePage/ui/WelcomeSection/WelcomeSection";
import {GalleryCircleSection} from "@/core/pages/homePage/ui/GalleryCirlceSection/GalleryCircleSection";
import {PhotosSection} from "@/core/pages/homePage/ui/PhotosSection/PhotosSection";
import {GuestExperienceSection} from "@/core/pages/homePage/ui/GuestExperience/GuestExperienceSection";
import {InteriorSection} from "@/core/pages/homePage/ui/InteriorSection/InteriorSection";
import {GastronomySection} from "@/core/pages/homePage/ui/GastronomySection/GastronomySection";
import {ArtGallerySection} from "@/core/pages/homePage/ui/ArtGallerySection/ArtGallerySection";
import {QuestionsSection} from "@/core/pages/homePage/ui/QuestionsSection/QuestionsSection";

export const HomePage = () => {
  return (
    <>
      <WelcomeSection />
      <GalleryCircleSection />
      <PhotosSection />
      <GuestExperienceSection />
      <InteriorSection />
      <GastronomySection />
      <ArtGallerySection />
      <QuestionsSection />
    </>
  );
};
