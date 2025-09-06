"use client";
import React, { useState } from "react";
import BlogLayout from "@/src/components/blogs/BlogLayout";
import CreateBlog from "@/src/components/blogs/CreateBlog";
import BlogIMageUploader from "@/src/components/blogs/BlogIMageUploader";
import AddBlogKeywords from "@/src/components/keywordsComponent/AddBlogKeywords";

export default function CreateBlogwrapper(props) {
  const { data, slug } = props;
  const [step, setStep] = useState(3); // step tracking
  const goNext = () => setStep((prev) => prev + 1);
  const goBack = () => setStep((prev) => Math.max(1, prev - 1));

  const renderStepComponent = () => {
    switch (step) {
      case 1:
        return (
          <CreateBlog
            apiData={data}
            slug={slug}
            onNext={goNext}
            onBack={goBack}
          />
        );

      case 2:
        return (
          <BlogIMageUploader
            apiData={data}
            slug={slug}
            onNext={goNext}
            onBack={goBack}
          />
        );

      case 3:
        return (
          <AddBlogKeywords
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
      <BlogLayout steps={step}>{renderStepComponent()}</BlogLayout>
    </div>
  );
}
