"use client";
import React, { useState, useContext, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/ReactToastify.css";
import { AppContext } from "@/src/_contextApi/AppContext";
import TeamList from "@/src/components/listcomponants/teamList/TeamList";
import { createTeamAction } from "../../utils/teamActions";

export default function Teamwarpper(props) {
  const { dataList } = props;
  const { isBtnLoading, setisBtnLoading } = useContext(AppContext);
  const [teams, setteams] = useState(dataList);

  const handelCreateTeam = async (data) => {
    try {
      setisBtnLoading(true);
      const response = await createTeamAction(data);

      if (response.error || response.status === "Fails") {
        toast.error(response.message || response.error);
        setisBtnLoading(false);
        return;
      }

      if (response.status === "success") {
        setteams((prev) => [response.data, ...prev]);
        toast.success("-Amnities created successfully");
        setisBtnLoading(false);
      }
    } catch (error) {
      console.log(error);
      setisBtnLoading(false);
    }
  };
  return (
    <div>
      <ToastContainer />
      <TeamList apiData={teams} handelCreate={handelCreateTeam} />
    </div>
  );
}
