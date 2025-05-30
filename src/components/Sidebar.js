"use client";

import React, { useState, useEffect } from "react";
import DashboardMenu from "@/components/dashboard_options";
import DiagramMenu from "@/components/diagram_options";
import TrendMenu from "@/components/trend_options";
import AlarmMenu from "@/components/alarms_options";
import SettingMenu from "@/components/setting_options";
import Custom_dashMenu from "@/components/cutom_dashboard";
import ReportsMenu from "@/components/reports_options";

const Sidebar = ({ activeTab, handleTabClick }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true); // State to manage width (open/minimized)

  // Check screen size and set sidebar to minimized on small screens
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setIsSidebarOpen(false); // Automatically minimize on small screens
      } else {
        setIsSidebarOpen(true); // Expand on larger screens
      }
    };

    handleResize(); // Set initial state based on screen size
    window.addEventListener("resize", handleResize); // Listen for resize events

    return () => {
      window.removeEventListener("resize", handleResize); // Cleanup listener
    };
  }, []);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen); // Toggle width manually
  };

  const renderMenu = () => {
    if (activeTab === "Home") return <DashboardMenu />;
    if (activeTab === "Diagram") return <DiagramMenu />;
    if (activeTab === "Trends") return <TrendMenu />;
    if (activeTab === "Alarms") return <AlarmMenu />;
    if (activeTab === "Setting") return <SettingMenu />;
    if (activeTab === "Custom") return <Custom_dashMenu />;
    if (activeTab === "Reports") return <ReportsMenu />;
    return null;
  };

  return (
    <aside
      className={`${
        isSidebarOpen ? "w-[256px]" : "w-[64px]"
      } flex-shrink-0 bg-[#f2f2f2] text-[#808080] h-[85vh] m-3 rounded-[7px] border-t-[5px] border-t-[#1f5897] relative border-2 border-[grey] transition-all duration-300`}
    >
      <div className="p-2 border-b-[1px] border-[#808080] flex justify-between items-center">
        <p
          className={`text-[13px] py-1 text-black ${
            isSidebarOpen ? "block" : "hidden"
          }`}
        >
          {activeTab} Section
        </p>
        <button
          onClick={toggleSidebar}
          className="text-[#1f5897] hover:text-[#0f3974] text-[16px]"
        >
          {isSidebarOpen ? "✖" : "☰"}
        </button>
      </div>
      <div className={`${isSidebarOpen ? "block" : "hidden"}`}>
        {renderMenu()} {/* Render menu dynamically */}
      </div>
      <img
        src={"./Jahaanns.png"}
        alt="User Image"
        className={`absolute bottom-0 transition-all duration-300 ${
          isSidebarOpen ? "w-full" : "w-[64px]"
        }`}
      />
    </aside>
  );
};

export default Sidebar;
