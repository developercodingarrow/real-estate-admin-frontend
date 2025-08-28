import React from "react";
import styles from "./projectlist.module.css";
import tagBg from "../../../../public/web-img/tagbg.png";
import StaticprojectImg from "../../../../public/web-img/default-project-image.png";
import Image from "next/image";
import ProjectListCard from "./ProjectListCard";
export default function ProjectList() {
  const projects = [
    {
      title: "3 BHK Flat/ Apartment in Gurgaon",
      location: "in Apex Our Home Sector 37c Gurgaon",
      price: "2 crore",
      unit: "3 bhk",
      Status: "Ready To move",
      createdDate: "21-aug-2025",
      projectfor: "Rent",
    },
    {
      title: "Luxury 4 BHK Villa in Bangalore",
      location: "in Prestige Lakeside Habitat Whitefield Bangalore",
      price: "4.5 crore",
      unit: "4 bhk",
      Status: "Under Construction",
      createdDate: "15-sep-2024",
      projectfor: "sell",
    },
    {
      title: "2 BHK Affordable Flat in Mumbai",
      location: "in Lodha New Cuffe Parade Wadala Mumbai",
      price: "1.2 crore",
      unit: "2 bhk",
      Status: "Ready To move",
      createdDate: "03-jul-2024",
      projectfor: "Rent",
    },
    {
      title: "Studio Apartment for Rent in Delhi",
      location: "in DLF Capital Greens Moti Nagar Delhi",
      price: "25,000/month",
      unit: "studio",
      Status: "Ready To move",
      createdDate: "12-oct-2024",
      projectfor: "rent",
    },
    {
      title: "5 BHK Duplex Penthouse in Hyderabad",
      location: "in My Home Jewel Financial District Hyderabad",
      price: "6.8 crore",
      unit: "5 bhk",
      Status: "Under Construction",
      createdDate: "30-may-2025",
      projectfor: "sell",
    },
    {
      title: "1 BHK Flat in Pune",
      location: "in Kolte Patil Life Republic Hinjawadi Pune",
      price: "65 lakh",
      unit: "1 bhk",
      Status: "Ready To move",
      createdDate: "18-jan-2024",
      projectfor: "sell",
    },
    {
      title: "Commercial Office Space in Chennai",
      location: "in Tidel Park Taramani Chennai",
      price: "3.2 crore",
      unit: "2000 sq ft",
      Status: "Ready To move",
      createdDate: "09-mar-2024",
      projectfor: "sell",
    },
    {
      title: "3 BHK Flat for Rent in Noida",
      location: "in Supertech Eco Village 1 Noida Extension",
      price: "35,000/month",
      unit: "3 bhk",
      Status: "Ready To move",
      createdDate: "22-nov-2024",
      projectfor: "rent",
    },
    {
      title: "Farmhouse in outskirts of Delhi",
      location: "in Sohna Road Gurgaon",
      price: "8.5 crore",
      unit: "5 bhk with pool",
      Status: "Ready To move",
      createdDate: "07-apr-2025",
      projectfor: "sell",
    },
    {
      title: "2 BHK Service Apartment in Kolkata",
      location: "in Uniworld City New Town Kolkata",
      price: "18,000/month",
      unit: "2 bhk",
      Status: "Fully Furnished",
      createdDate: "14-dec-2024",
      projectfor: "rent",
    },
  ];

  return (
    <div className={styles.main_conatiner}>
      <div className={styles.page_heading}>Project List</div>
      <div className={styles.page_fillter_wrapper}>Fillter bar</div>
      <div className={styles.table_wrapper}>
        {projects.map((item, index) => {
          return <ProjectListCard projectDetails={item} />;
        })}
      </div>
    </div>
  );
}
