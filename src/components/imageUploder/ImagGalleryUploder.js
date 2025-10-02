"use client";
import React, { useContext, useEffect, useState, useRef } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/ReactToastify.css";
import useImageGallery from "@/src/_custome_hooks/useImageGallery";
import Image from "next/image";
import styles from "./css/imageUplaoder.module.css";
import { MdDeleteForever } from "../ApplicationIcons";
import {
  deleteGalleryImgAction,
  updateProjectGallery,
} from "@/src/app/utils/projectActions";
import ClickBtn from "../elements/buttons/ClickBtn";
import { useParams, useRouter } from "next/navigation";
export default function ImagGalleryUploder(props) {
  const router = useRouter();
  const { slug, apiData } = props;
  const [isBtnLoading, setisBtnLoading] = useState(false);
  const [apiImages, setApiImages] = useState(apiData?.galleryImages || []); // only urls
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
    const remainingSlots = maxImages - apiImages.length - images.length;
    if (remainingSlots <= 0) return;
    addImages(Array.from(files).slice(0, remainingSlots));
    // allow re-selecting same files
    e.target.value = "";
  };

  // optional: see what's in state
  useEffect(() => {}, [images]);

  const handleClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };
  const handelUplodeImgages = async () => {
    setisBtnLoading(true);
    if (images.length === 0) return;

    const formData = new FormData();
    images.forEach((item) => {
      formData.append("galleryImages", item.file); // multer expects "galleryImages"
    });

    try {
      const res = await updateProjectGallery(formData, slug);

      if (res.status === "success") {
        setisBtnLoading(false);
        toast.success(res.message);
        router.refresh();
      } else {
        setisBtnLoading(false);

        router.refresh();
      }
    } catch (err) {
      setisBtnLoading(false);
      console.error("Error uploading:", err);
      router.refresh();
    }
  };

  const handelDeleteApiGalleryImage = async (imgurl) => {
    try {
      const res = await deleteGalleryImgAction(imgurl, slug);

      if (res.status === "success") {
        setApiImages((prev) => prev.filter((img) => img.url !== imgurl));
        toast.success(res.message);
        router.refresh();
      }
    } catch (error) {
      console.error("Error uploading:", err);
      router.refresh();
    }
  };

  return (
    <div className={styles.image_gallery}>
      <ToastContainer />
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
          <div>
            click to Upload your photo max siz 10Mb. formates:png, jpg,webp
          </div>
          Total images in state: {images.length}
        </div>
      </div>
      <div className={styles.prev_container}>
        <div className={styles.thumbnails_wrapper}>
          {apiImages.map((img) => (
            <div className={styles.prev_imgBox} key={img._id}>
              <Image
                src={img.url}
                alt="gallery"
                width={50}
                height={50}
                className={styles.gallery_prev_imgStyle}
              />
              <div
                className={styles.remove_img}
                onClick={() => handelDeleteApiGalleryImage(img.url)}
              >
                <MdDeleteForever />
              </div>
            </div>
          ))}
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
          <ClickBtn
            btnText="update"
            handelClick={handelUplodeImgages}
            btnLoading={isBtnLoading}
          />

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
