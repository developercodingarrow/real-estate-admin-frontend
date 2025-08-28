"use client";
import React, { useContext, useEffect, useState, useRef } from "react";
import useImageGallery from "@/src/_custome_hooks/useImageGallery";
import Image from "next/image";
import styles from "./css/imageUplaoder.module.css";
import { MdDeleteForever } from "../ApplicationIcons";

export default function ImagGalleryUploder() {
  const [previewImage, setPreviewImage] = useState(null);
  const fileInputRef = useRef(null);
  const { images, addImages, removeImage, clearAllImages, maxImages } =
    useImageGallery([], 5);

  // keep a ref pointing to latest images so cleanup can revoke properly on unmount
  const imagesRef = useRef(images);
  useEffect(() => {
    imagesRef.current = images;
  }, [images]);

  // cleanup on unmount: revoke any remaining previews
  useEffect(() => {
    return () => {
      imagesRef.current.forEach((img) => {
        try {
          URL.revokeObjectURL(img.preview);
        } catch (e) {}
      });
    };
  }, []);

  // file input handler
  const handleFileSelect = (e) => {
    const files = e.target.files;
    if (!files || files.length === 0) return;
    addImages(files);
    // allow re-selecting same files
    e.target.value = "";
  };

  // remove handler that also clears preview if needed
  // const handleRemove = (id) => {
  //   if (previewImage?.id === id) setPreviewImage(null);
  //   removeImage(id);
  // };

  // optional: see what's in state
  useEffect(() => {
    console.log("[component] images updated:", images);
  }, [images]);

  const handleClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  return (
    <div className={styles.image_gallery}>
      <h2 className={styles.title}>Image Gallery Uploader</h2>
      <p className={styles.subtitle}>Upload up to {maxImages} images</p>
      <p className={styles.debug}>Current images: {images.length}</p>
      <div className={`${styles.upload_area} `} onClick={handleClick}>
        <input
          type="file"
          accept="image/*"
          multiple
          onChange={handleFileSelect}
          className={styles.file_inputStyle}
          ref={fileInputRef}
          style={{ display: "none" }}
        />
        <div className={styles.img_info}>
          Total images in state: {images.length}
        </div>
      </div>
      <div className={styles.prev_container}>
        <div className={styles.thumbnails_wrapper}>
          {images.map((item, index) => {
            if (!item.preview) {
              return <div key={item.id}>Missing preview for {item.name}</div>;
            }
            return (
              <div className={styles.prev_imgBox}>
                <Image
                  src={item.preview}
                  width={50}
                  height={50}
                  className={styles.gallery_prev_imgStyle}
                />
                <div
                  className={styles.remove_img}
                  onClick={() => removeImage(item.id)}
                >
                  <MdDeleteForever />
                </div>
              </div>
            );
          })}
        </div>
        <div className={styles.prev_footer}>
          {images.length > 0 && (
            <div className={styles.remove_btn} onClick={clearAllImages}>
              clear all image
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
