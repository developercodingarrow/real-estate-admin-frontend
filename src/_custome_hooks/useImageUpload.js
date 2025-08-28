"use client";

import React, { useContext, useEffect, useState } from "react";

export default function useImageUpload(dataFor) {
  const [previewImage, setPreviewImage] = useState(null);
  const [image, setImage] = useState(null);
  // const [imageName, setImageName] = useState(null);
  // const [isValid, setIsValid] = useState(true);
  // const [imgData, setimgData] = useState({
  //   title: apiData?.[dataFor]?.title || "",
  //   altText: apiData?.[dataFor]?.altText || "",
  //   caption: apiData?.[dataFor]?.caption || "",
  //   description: apiData?.[dataFor]?.description || "",
  // });

  // const [errors, setErrors] = useState({
  //   title: "",
  //   altText: "",
  //   caption: "",
  //   description: "",
  // });

  // const validateInputs = () => {
  //   const newErrors = {};

  //   if (!imgData.title || imgData.title.length < 3) {
  //     newErrors.title = "Title must be at least 3 characters.";
  //   }
  //   if (!imgData.altText || imgData.altText.length < 3) {
  //     newErrors.altText = "Alt text must be at least 3 characters.";
  //   }
  //   if (!imgData.caption || imgData.caption.length < 3) {
  //     newErrors.caption = "Caption must be at least 3 characters.";
  //   }
  //   if (!imgData.description || imgData.description.length < 3) {
  //     newErrors.description = "Description must be at least 3 characters.";
  //   }

  //   setErrors(newErrors);
  //   setIsValid(
  //     Object.keys(newErrors).length > 0 ||
  //       (!previewImage && !apiData[dataFor].url) // Allow existing image
  //   );
  // };

  useEffect(() => {
    // validateInputs();
  }, [previewImage]);

  // Handle apiData updates safely
  // useEffect(() => {
  //   if (apiData && apiData[dataFor]) {
  //     setimgData({
  //       title: apiData[dataFor]?.title || "",
  //       altText: apiData[dataFor]?.altText || "",
  //       caption: apiData[dataFor]?.caption || "",
  //       description: apiData[dataFor]?.description || "",
  //     });
  //   }
  // }, [apiData, dataFor]);

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

  // const handelChange = (e) => {
  //   const { name, value } = e.target;
  //   setimgData((prevData) => ({
  //     ...prevData,
  //     [name]: value,
  //   }));

  //   setErrors((prevErrors) => ({
  //     ...prevErrors,
  //     [name]:
  //       value.length < 3
  //         ? `${
  //             name.charAt(0).toUpperCase() + name.slice(1)
  //           } must be at least 3 characters.`
  //         : "",
  //   }));
  // };

  return {
    previewImage,
    setPreviewImage,
    image,
    handleImageUpload,
    removeImg,
    // handelChange,
    // imageName,
    // isValid,
    // errors,
  };
}
