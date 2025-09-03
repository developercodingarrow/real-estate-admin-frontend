"use client";

import React, { useContext, useEffect, useState } from "react";

export default function useImageUpload(apiData, dataFor) {
  const [previewImage, setPreviewImage] = useState(null);
  const [image, setImage] = useState(null);

  useEffect(() => {
    // validateInputs();
  }, [previewImage]);

  // Upload Image
  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewImage(reader.result);
        // setImageName(file.name);
      };
      reader.readAsDataURL(file);
      setImage(file);
    }
  };

  const removeImg = () => {
    setPreviewImage(null);
    setImage(null);
  };

  return {
    previewImage,
    setPreviewImage,
    image,
    handleImageUpload,
    removeImg,
  };
}
