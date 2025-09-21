"use client";
import React, { useState, useContext, useEffect } from "react";
import styles from "./bloglistcard.module.css";
import Image from "next/image";
import StaticprojectImg from "../../../../public/web-img/default-project-image.png";
import Link from "next/link";
import { ModelsContext } from "@/src/_contextApi/ModelContextProvider";
import { formatDate } from "@/src/_logicalFunctions/formatDate";
import ToggleBtn from "../../elements/toogleBtns/ToggleBtn";

export default function BlogListCard(props) {
  const { dataList, onToggleIsPublished } = props;
  const { handelOpenDeleteModel } = useContext(ModelsContext);

  const handelDeleteModel = (itemId) => {
    handelOpenDeleteModel(itemId);
  };

  const handelToogleIsPublish = () => {
    if (onToggleIsPublished) {
      onToggleIsPublished(dataList._id); // pass id + new state
    }
  };
  return (
    <div className={styles.blog_card}>
      <div className={styles.card_inner_container}>
        <div className={styles.project_img_wrapper}>
          {dataList.blogImage?.url ? (
            <Image
              src={dataList?.blogImage.url}
              width={500}
              height={500}
              className={styles.projectImgStyle}
            />
          ) : (
            <Image
              src={StaticprojectImg}
              width={500}
              height={500}
              className={styles.projectImgStyle}
            />
          )}
        </div>
        <div className={styles.project_content_wrapper}>
          <div className={styles.card_title}>{dataList?.title}</div>
          <div className={styles.card_metaDescreption}>
            {dataList?.metaDescription}
          </div>
          <div className={styles.keywords_wrapper}>
            {dataList?.keywords?.map((item, index) => {
              return <div className={styles.keyword_item}>{item}</div>;
            })}
          </div>
          <div className={styles.card_action_wrapper}>
            <div>{formatDate(dataList?.createdAt)}</div>
            <div className={styles.card_actions}>
              <div className={styles.togleBtn_box}>
                <span className={styles.togle_Text}> Publish Stats</span>
                <ToggleBtn
                  initial={dataList?.publishStatus}
                  onToggle={handelToogleIsPublish}
                />
              </div>
              <div
                className={styles.action_btn}
                onClick={() => handelDeleteModel(dataList._id)}
              >
                {" "}
                Delete
              </div>
              <Link
                href={`/create-new-blog/${dataList._id}`}
                className={styles.action_btn}
              >
                {" "}
                Edit
              </Link>
              <Link
                href={`/create-new-blog/${dataList._id}`}
                className={styles.action_btn}
              >
                {" "}
                view
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
