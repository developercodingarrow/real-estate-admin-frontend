import React from "react";
import styles from "./projectamenities.module.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/ReactToastify.css";
import CreateStaticBox from "../startCreate/CreateStaticBox";
import TabBar from "./TabBar";
import CustomeCheckBox from "../inputsElements/CustomeCheckBox";
import AllAmenities from "./AllAmenities";
import ClickBtn from "../elements/buttons/ClickBtn";
export default function ProjectAmenities(props) {
  const { apiData, slug, onNext, onBack } = props;
  return (
    <div className={styles.amnities_mainConatiner}>
      <div className={styles.inner_conatiner}>
        <div className={styles.amnities_column}>
          <div className={styles.fillter_tab_wrapper}>
            <TabBar />
          </div>
          <div>
            <AllAmenities
              apiData={apiData}
              slug={slug}
              onNext={onNext}
              onBack={onBack}
            />
          </div>
        </div>
      </div>
      <div className={styles.submitBtn_wrapper}></div>
    </div>
  );
}
