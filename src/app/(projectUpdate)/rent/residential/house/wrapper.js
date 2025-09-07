"use client";
import React, { useEffect, useState } from "react";
import UpdateProjectUiLayout from "@/src/components/projectsUpdate/layoutUi/UpdateProjectUiLayout";
import SRUpdateHouse from "@/src/components/projectsUpdate/sell/residential/house/SRUpdateHouse";
import ProjectImageUploader from "@/src/components/imageUploder/ProjectImageUploader";
import ProjectAmenities from "@/src/components/amenities/ProjectAmenities";
import ProjectSeo from "@/src/components/seoComponents/ProjectSeo";
import AddKeywords from "@/src/components/keywordsComponent/AddKeywords";
import RRUpdateHouse from "@/src/components/projectsUpdate/rent/residential/house/RRUpdateHouse";

export default function UpdateRRHousewrapper(props) {
  const { data, slug } = props;
  const [step, setStep] = useState(1); // step tracking
  const goNext = () => setStep((prev) => prev + 1);
  const goBack = () => setStep((prev) => Math.max(1, prev - 1));

  // Save step whenever it changes
  useEffect(() => {
    localStorage.setItem(
      `stepper-${slug}`,
      JSON.stringify({ step, timestamp: Date.now() })
    );
  }, [step, slug]);

  const renderStepComponent = () => {
    switch (step) {
      case 1:
        return (
          <RRUpdateHouse
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
