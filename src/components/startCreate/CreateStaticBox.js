import React from "react";
import styles from "./startCreate.module.css";
import Link from "next/link";
import { MdDelete } from "../ApplicationIcons";
export default function CreateStaticBox(props) {
  const { boxTitle } = props;

  const sideBoxLinks = [
    {
      name: "Update Project Files",
    },
    {
      name: "Update Project Amnities",
    },
    {
      name: "Update Project SEO",
    },
  ];
  return (
    <div className={styles.static_container}>
      <div className={styles.box_title}>{boxTitle}</div>
      <div className={styles.descreption_wrapper}>
        You can update the project section after you start creating the project
      </div>
      <div className={styles.action_links_wrapper}>
        {sideBoxLinks.map((item, index) => {
          return (
            <div key={index} className={styles.link_wrapper}>
              <span className={styles.link_dot}></span>
              <Link href={"/"} className={styles.link_style}>
                {item.name}
              </Link>{" "}
            </div>
          );
        })}
      </div>
      <div className={styles.delete_project_wrapper}>
        <div className={styles.delete_text}>
          Once you start building the project, you can't file this section, in
          case something went wrong, just delete it
        </div>
        <div className={styles.icon_wrapper}>
          <MdDelete />
        </div>
      </div>
    </div>
  );
}
