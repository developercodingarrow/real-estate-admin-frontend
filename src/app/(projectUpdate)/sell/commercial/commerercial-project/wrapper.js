"use client";
import React, { useContext } from "react";
import { StepperContext } from "@/src/_contextApi/StepperProvider";
import ProjectAmenities from "@/src/components/amenities/ProjectAmenities";
import ProjectImageUploader from "@/src/components/imageUploder/ProjectImageUploader";
import AddKeywords from "@/src/components/keywordsComponent/AddKeywords";
import UpdateProjectUiLayout from "@/src/components/projectsUpdate/layoutUi/UpdateProjectUiLayout";
import CommercialShopCat from "@/src/components/projectsUpdate/sell/commercial/shops/CommercialShopCat";
import ProjectSeo from "@/src/components/seoComponents/ProjectSeo";

export default function UpdateSCCommerercialWrapper(props) {
  const { data, slug } = props;
  const { step, goNext, goBack } = useContext(StepperContext);

  const renderStepComponent = () => {
    switch (step) {
      case 1:
        return (
          <CommercialShopCat
            apiData={data}
            slug={slug}
            onNext={goNext}
            onBack={goBack}
          />
        );

      case 2:
        return (
          <ProjectImageUploader
            apiData={data}
            slug={slug}
            onNext={goNext}
            onBack={goBack}
          />
        );

      case 3:
        return (
          <ProjectAmenities
            apiData={data}
            slug={slug}
            onNext={goNext}
            onBack={goBack}
          />
        );

      case 4:
        return (
          <ProjectSeo
            apiData={data}
            slug={slug}
            onNext={goNext}
            onBack={goBack}
          />
        );
      case 5:
        return (
          <AddKeywords
            apiData={data}
            slug={slug}
            onNext={goNext}
            onBack={goBack}
          />
        );

      default:
        return <div>No component found</div>;
    }
  };
  return (
    <div>
      <UpdateProjectUiLayout steps={step}>
        {renderStepComponent()}
      </UpdateProjectUiLayout>
    </div>
  );
}
