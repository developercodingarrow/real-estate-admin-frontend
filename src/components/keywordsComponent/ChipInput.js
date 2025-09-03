"use client";
import React, { useState, useEffect, useContext } from "react";
import styles from "./addkeywords.module.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/ReactToastify.css";
import ClickBtn from "../elements/buttons/ClickBtn";
import { addKeywordsAction } from "@/src/app/utils/projectActions";
import { AppContext } from "@/src/_contextApi/AppContext";

export default function ChipInput(props) {
  const { size = "medium", apiData, slug } = props;
  const { isBtnLoading, setisBtnLoading } = useContext(AppContext);
  console.log(apiData);
  const [newValue, setnewValue] = useState("");
  const [keywords, setkeywords] = useState([]);

  useEffect(() => {
    if (apiData?.keywords && Array.isArray(apiData.keywords)) {
      setkeywords(apiData.keywords);
    }
  }, [apiData]);

  const handleInputChange = (event) => {
    const value = event.target.value;
    setnewValue(value);
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter" && newValue.trim()) {
      event.preventDefault();
      if (!keywords.includes(newValue.trim())) {
        setkeywords([...keywords, newValue.trim()]);
      }
      setnewValue("");
    }
  };

  const removeTag = (keywordRemove) => {
    setkeywords(keywords.filter((keyword) => keyword !== keywordRemove));
  };

  const handelKeywordSubmit = async () => {
    console.log(keywords);
    setisBtnLoading(true);
    try {
      const res = await addKeywordsAction({ keywords }, slug);
      console.log("chip---", res.data);
      if (res.data.status === "success") {
        setisBtnLoading(false);
        toast.success(res.data.message);
      }
    } catch (error) {
      console.log(error);
      setisBtnLoading(false);
    }
  };
  return (
    <div>
      <ToastContainer />
      <div className={styles.chip_conatiner}>
        <div className={`${styles.container} ${styles[size]} `}>
          <div className={styles.tagContainer}>
            {keywords.map((keywords, index) => (
              <div key={index} className={styles.chip}>
                {keywords}
                <span
                  className={styles.removeChip}
                  onClick={() => removeTag(keywords)}
                >
                  &times;
                </span>
              </div>
            ))}
            <div className={styles.input_wrapper}>
              <input
                type="text"
                value={newValue}
                placeholder="Enter keywords"
                className={styles.input}
                onChange={handleInputChange}
                onKeyDown={handleKeyDown}
              />
            </div>
          </div>
        </div>
      </div>

      <div className={styles.updateBtn_wrapper}>
        <ClickBtn
          btnText="Add Keywords"
          handelClick={handelKeywordSubmit}
          btnLoading={isBtnLoading}
        />
      </div>
    </div>
  );
}
