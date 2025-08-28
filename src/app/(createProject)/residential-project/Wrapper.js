"use client";
import React, { useState } from "react";
import StartCreate from "@/src/components/startCreate/StartCreate";
import { residentialOptions } from "../../../jsonData/projectFiledsData";
import SellApartment from "@/src/components/createproject/projectTypes/sell/sellAppartment/SellApartment";
import styles from "../page.module.css";

export default function ResidentialWrapper() {
  const [currentStep, setCurrentStep] = useState(1);
  const [propertyPurpose, setpropertyPurpose] = useState("sell");
  const [propertySubType, setPropertySubType] = useState("apartment");

  const handlePropertyPurposeChange = (e) => {
    console.log(e.target.value);
    setpropertyPurpose(e.target.value);
  };
  const handleSubTypeChange = (e) => {
    console.log(e.target.value);
    setPropertySubType(e.target.value);
  };

  const nextStep = () => {
    setCurrentStep((prev) => prev + 1);
  };

  const prevStep = () => {
    setCurrentStep((prev) => prev - 1);
  };

  // / Function to render the appropriate component based on selections
  const renderStepComponent = () => {
    if (currentStep === 1) {
      return (
        <StartCreate
          pageHeading="Select Property Type"
          optionFor="residential"
          optionsFileds={residentialOptions}
          propertyPurpose={propertyPurpose}
          handelpropertyPurpose={handlePropertyPurposeChange}
          propertySubType={propertySubType}
          handelSubTypeChange={handleSubTypeChange}
          onNext={nextStep}
        />
      );
    }

    // For steps 2+, determine which component to render based on selections
    const componentKey = `${propertyPurpose}_${propertySubType}`;

    switch (componentKey) {
      case "sell_apartment":
        return (
          <SellApartment
            pageHeading="Fill The fileds for Appartment/Flat"
            onNext={nextStep}
            onBack={prevStep}
          />
        );

      case "sell_house":
        return <SellHouse onNext={nextStep} onBack={prevStep} />;
      // return <ProjectAmenities />;

      case "rent_apartment":
        return <RentApartment onNext={nextStep} onBack={prevStep} />;

      default:
        return <div>No component found for {componentKey}</div>;
    }
  };

  return (
    <div className={styles.components_wrraper}>{renderStepComponent()}</div>
  );
}
