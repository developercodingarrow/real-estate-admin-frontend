"use client";
import React, { useContext, useState } from "react";
import ProjectAmenities from "@/src/components/amenities/ProjectAmenities";
import ProjectImageUploader from "@/src/components/imageUploder/ProjectImageUploader";
import AddKeywords from "@/src/components/keywordsComponent/AddKeywords";
import UpdateProjectUiLayout from "@/src/components/projectsUpdate/layoutUi/UpdateProjectUiLayout";
import ProjectSeo from "@/src/components/seoComponents/ProjectSeo";
import CommercialOffice from "@/src/components/projectsUpdate/sell/commercial/office/CommercialOffice";
import RentCommercialoffice from "@/src/components/projectsUpdate/rent/commercial/office/RentCommercialoffice";
import { StepperContext } from "@/src/_contextApi/StepperProvider";

export default function RCReadyToMoveOfficeWrapper(props) {
  const { data, slug } = props;
  const { step, goNext, goBack } = useContext(StepperContext);

  const renderStepComponent = () => {
    switch (step) {
      case 1:
        return (
          <RentCommercialoffice
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
