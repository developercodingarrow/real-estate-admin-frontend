"use client";
import React, { useState } from "react";
import StartCreate from "@/src/components/startCreate/StartCreate";
import { commercialOptions } from "../../../jsonData/projectFiledsData";
export default function Commercialwrapper() {
  const [propertyPurpose, setpropertyPurpose] = useState("sell");
  const [propertySubType, setPropertySubType] = useState("");

  const handlePropertyPuposeChange = (e) => {
    console.log(e.target.value);
    setpropertyPurpose(e.target.value);
  };
  const handleSubTypeChange = (e) => {
    console.log(e.target.value);
    setPropertySubType(e.target.value);
  };
  return (
    <div>
      <StartCreate
        pageHeading="Start Creating New Commercial project"
        optionFor="commercial"
        optionsFileds={commercialOptions}
        propertyPurpose={propertyPurpose}
        propertySubType={propertySubType}
        handelpropertyPurpose={handlePropertyPuposeChange}
        handelSubTypeChange={handleSubTypeChange}
      />
    </div>
  );
}
