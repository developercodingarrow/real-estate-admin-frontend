import ProjectList from "@/src/components/listcomponants/projectlist/ProjectList";
import React from "react";

export default function ProjectListwrapper(props) {
  const { dataList } = props;
  return (
    <div>
      <ProjectList apiData={dataList} />
    </div>
  );
}
