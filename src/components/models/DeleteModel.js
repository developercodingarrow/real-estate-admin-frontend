"use client";
import React, { useContext, useEffect, useState } from "react";
import styles from "./modelStyle.module.css";
import { ModelsContext } from "@/src/_contextApi/ModelContextProvider";
import ParentModelBox from "./ParentModelBox";
import LinkBtn from "../elements/buttons/LinkBtn";
import ClickBtn from "../elements/buttons/ClickBtn";
import { AppContext } from "@/src/_contextApi/AppContext";

export default function DeleteModel(props) {
  const { deletehandel, cancelhandel } = props;
  const { isDeleteOpen, setisDeleteOpen, handelCloseDeleteModel } =
    useContext(ModelsContext);
  const { isBtnLoading, setisBtnLoadin } = useContext(AppContext);
  if (!isDeleteOpen) return null;

  return (
    <ParentModelBox
      modelFor={isDeleteOpen}
      modelClosehandel={handelCloseDeleteModel}
    >
      <div className={styles.delete_model_container}>
        <div className={styles.model_title}>
          Please confirm that you want to delete? This action cannot be undone.
        </div>
        <div className={styles.created_btns_wrapper}>
          <ClickBtn btnText="cancel" handelClick={handelCloseDeleteModel} />
          <ClickBtn
            btnText="Delete"
            handelClick={deletehandel}
            btnLoading={isBtnLoading}
          />
        </div>
      </div>
    </ParentModelBox>
  );
}
