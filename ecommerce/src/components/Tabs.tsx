import React from "react";
import { Tab } from "../types/Types";

interface TabsProps {
  tabs: Tab[];
  onTabClick: (id: string) => void;
  activeTab: string;
}

const Tabs: React.FC<TabsProps> = ({ tabs, onTabClick, activeTab }) => {
  return (
    <div className="flex flex-col items-center m-5">
      <div className="flex flex-wrap justify-between md:space-x-10 space-x-2">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            className={`px-5 md:px-10 py-2 hover:border transition ${
              activeTab === tab.id ? "border" : ""
            }`}
            onClick={() => onTabClick(tab.id)}
          >
            {tab.label}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Tabs;
