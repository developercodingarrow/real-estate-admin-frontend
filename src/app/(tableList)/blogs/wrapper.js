"use client";
import BlogList from "@/src/components/listcomponants/bloglist/BlogList";
import React from "react";

export default function BlogListwrapper(props) {
  const { dataList } = props;

  return (
    <div>
      <BlogList apiData={dataList} />
    </div>
  );
}
