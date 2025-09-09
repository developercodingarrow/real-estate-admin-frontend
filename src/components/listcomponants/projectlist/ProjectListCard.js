"use client";
import React, { useState, useContext, useMemo } from "react";
import styles from "./projectlist.module.css";
import tagBg from "../../../../public/web-img/tagbg.png";
import StaticprojectImg from "../../../../public/web-img/default-project-image.png";
import Image from "next/image";
import { ModelsContext } from "@/src/_contextApi/ModelContextProvider";
import Link from "next/link";
import { formatDate } from "@/src/_logicalFunctions/formatDate";
export default function ProjectListCard(props) {
  const { dataList } = props;
  const { handelOpenDeleteModel } = useContext(ModelsContext);

  const handelDeleteModel = (itemId) => {
    console.log(itemId);
    handelOpenDeleteModel(itemId);
  };
  return (
    <div className={styles.project_card}>
      <div className={styles.card_topBar}>
        <div className={styles.card_topBarTag}>
          <Image
            src={tagBg}
            width={200}
            height={200}
            className={styles.tagImgStyle}
          />
          <div className={styles.tagText}>{dataList?.propertyCategory}</div>
        </div>
      </div>
      <div className={styles.card_inner_container}>
        <div className={styles.project_img_wrapper}>
          {dataList?.projectImage?.url ? (
            <Image
              src={dataList?.projectImage.url}
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

          <div className={styles.tag_on_image}>{dataList?.lookingFor}</div>
        </div>
        <div className={styles.project_content_wrapper}>
          <div className={styles.card_title}>{dataList?.title}</div>
          <div className={styles.project_location_wrapper}>
            {dataList?.location}
          </div>
          <div className={styles.card_footer_wrapper}>
            <div className={styles.project_stats}>
              {dataList.basicPrice && (
                <div className={styles.stats_box}>
                  <div className={styles.stats_staticText}>Price</div>
                  <div className={styles.stats_dynimicText}>
                    {dataList?.price}
                  </div>
                </div>
              )}

              <div className={styles.stats_box}>
                <div className={styles.stats_staticText}>property Type</div>
                <div className={styles.stats_dynimicText}>
                  {dataList?.propertyType}
                </div>
              </div>
              <div className={styles.stats_box}>
                <div className={styles.stats_staticText}>Status</div>
                <div className={styles.stats_dynimicText}>
                  {dataList?.projectStatus}
                </div>
              </div>
              <div className={styles.stats_box}>
                <div className={styles.stats_staticText}>Crated Date</div>
                <div className={styles.stats_dynimicText}>
                  {formatDate(dataList?.createdAt)}
                </div>
              </div>
            </div>
            <div className={styles.card_action_wrapper}>
              <div
                className={styles.action_btn}
                onClick={() => handelDeleteModel(dataList._id)}
              >
                {" "}
                Delete
              </div>
              <Link
                href={`/${dataList.lookingFor}/${dataList.propertyCategory}/${dataList?.propertyType}/${dataList?._id}`}
                className={styles.action_btn}
              >
                {" "}
                Edit
              </Link>
              <div className={styles.action_btn}> View</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
