"use client";
import AllAmenities from "@/src/components/amenities/AllAmenities";
import ProjectAmenities from "@/src/components/amenities/ProjectAmenities";
import ProjectImageUploader from "@/src/components/imageUploder/ProjectImageUploader";
import ProjectSeo from "@/src/components/seoComponents/ProjectSeo";
import BuyAppartmentUpdate from "@/src/components/updateprojects/buy/buyappartment/BuyAppartmentUpdate";
import React, { useState } from "react";

export default function UpdatePagewrapper(props) {
  const { data, slug } = props;
  const [lookingFor, setlookingFor] = useState(data.lookingFor || "");
  const [propertyType, setpropertyType] = useState(data.propertyType || "");
  const [step, setStep] = useState(4); // step tracking

  const goNext = () => setStep((prev) => prev + 1);
  const goBack = () => setStep((prev) => Math.max(1, prev - 1));

  const renderStepComponent = () => {
    // For steps , determine which component to render based on selections
    const componentKey = `${lookingFor}_${propertyType}`;

    switch (componentKey) {
      case "buy_apartment":
        if (step === 1) {
          return (
            <BuyAppartmentUpdate
              apiData={data}
              slug={slug}
              onNext={goNext} // pass handler to child
            />
          );
        }
        if (step === 2) {
          return (
            <ProjectImageUploader
              apiData={data}
              slug={slug}
              onNext={goNext}
              onBack={goBack}
            />
          );
        }
        if (step === 3) {
          return (
            <ProjectAmenities
              apiData={data}
              slug={slug}
              onNext={goNext}
              onBack={goBack}
            />
          );
        }
        if (step === 4) {
          return (
            <ProjectSeo
              apiData={data}
              slug={slug}
              onNext={goNext}
              onBack={goBack}
            />
          );
        }

      case "sell_house":
        return "sell house component here";

      case "rent_apartment":
        return "rent apartment component here";

      default:
        return <div>No component found for {componentKey}</div>;
    }
  };
  return <div>{renderStepComponent()}</div>;
}
