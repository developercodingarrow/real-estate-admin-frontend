import React from "react";
import styles from "./projectlist.module.css";
import tagBg from "../../../../public/web-img/tagbg.png";
import StaticprojectImg from "../../../../public/web-img/default-project-image.png";
import Image from "next/image";
export default function ProjectListCard(props) {
  const { projectDetails } = props;
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
          <div className={styles.tagText}>Residential</div>
        </div>
      </div>
      <div className={styles.card_inner_container}>
        <div className={styles.project_img_wrapper}>
          <Image
            src={StaticprojectImg}
            width={500}
            height={500}
            className={styles.projectImgStyle}
          />
          <div className={styles.tag_on_image}>
            {projectDetails?.projectfor}
          </div>
        </div>
        <div className={styles.project_content_wrapper}>
          <div className={styles.card_title}>{projectDetails?.title}</div>
          <div className={styles.project_location_wrapper}>
            {projectDetails?.location}
          </div>
          <div className={styles.card_footer_wrapper}>
            <div className={styles.project_stats}>
              <div className={styles.stats_box}>
                <div className={styles.stats_staticText}>Price</div>
                <div className={styles.stats_dynimicText}>
                  {projectDetails?.price}
                </div>
              </div>

              <div className={styles.stats_box}>
                <div className={styles.stats_staticText}>Unites</div>
                <div className={styles.stats_dynimicText}>
                  {projectDetails?.unit}
                </div>
              </div>
              <div className={styles.stats_box}>
                <div className={styles.stats_staticText}>Status</div>
                <div className={styles.stats_dynimicText}>
                  {projectDetails?.Status}
                </div>
              </div>
              <div className={styles.stats_box}>
                <div className={styles.stats_staticText}>Crated Date</div>
                <div className={styles.stats_dynimicText}>
                  {projectDetails?.createdDate}
                </div>
              </div>
            </div>
            <div className={styles.card_action_wrapper}>
              <div className={styles.action_btn}> Delete</div>
              <div className={styles.action_btn}> Edit</div>
              <div className={styles.action_btn}> View</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
