import React, { useContext } from "react";
import styles from "./modelStyle.module.css";
import doneIcon from "../../../public/created_doneIcon.png";
import { ModelsContext } from "@/src/_contextApi/ModelContextProvider";
import ParentModelBox from "./ParentModelBox";
import Image from "next/image";
import ClickBtn from "../elements/buttons/ClickBtn";
import LinkBtn from "../elements/buttons/LinkBtn";

export default function CreatedModel(props) {
  const { nextLink } = props;
  const { isCreatedOpen, setisCreatedOpen, handelCloseCreatedModel } =
    useContext(ModelsContext);
  if (!isCreatedOpen) return null;

  return (
    <ParentModelBox
      modelFor={isCreatedOpen}
      modelClosehandel={handelCloseCreatedModel}
    >
      <div className={styles.CreateModel_Content}>
        <div className={styles.crated_innerContainer}>
          <div className={styles.created_done_container}>
            <div className={styles.done_icon_wrapper}>
              <Image
                src={doneIcon}
                width={200}
                height={200}
                className={styles.img_style}
                alt="Saransh realtors"
              />
            </div>
          </div>
          <div className={styles.created_infoBox}>
            Your project basics have been saved. To publish it, you must
            complete all mandatory steps.
          </div>
          <div className={styles.created_btns_wrapper}>
            <LinkBtn btnText="back To home" />
            <LinkBtn btnText="Continue.." linkPath={`/${nextLink}`} />
          </div>
        </div>
      </div>
    </ParentModelBox>
  );
}
