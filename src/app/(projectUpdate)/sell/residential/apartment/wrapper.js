"use client";
import React, { useState } from "react";
import ProjectAmenities from "@/src/components/amenities/ProjectAmenities";
import ProjectImageUploader from "@/src/components/imageUploder/ProjectImageUploader";
import AddKeywords from "@/src/components/keywordsComponent/AddKeywords";
import UpdateProjectUiLayout from "@/src/components/projectsUpdate/layoutUi/UpdateProjectUiLayout";
import SRUpdateApartment from "@/src/components/projectsUpdate/sell/residential/apartment/SRUpdateApartment";
import ProjectSeo from "@/src/components/seoComponents/ProjectSeo";

export default function UpdateSRApartmentWrapper(props) {
  const { data, slug } = props;
  const [step, setStep] = useState(1); // step tracking
  const goNext = () => setStep((prev) => prev + 1);
  const goBack = () => setStep((prev) => Math.max(1, prev - 1));

  const renderStepComponent = () => {
    switch (step) {
      case 1:
        return <SRUpdateApartment apiData={data} slug={slug} onNext={goNext} />;

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
