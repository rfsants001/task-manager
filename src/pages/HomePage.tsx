import React from "react";
import { Panel } from "primereact/panel";

const HomePage: React.FC = () => {
  return (
    <div className="flex-initial flex">
      <div className="grid">
        <div className="col-6">
          <Panel header="User">{/* User content */}</Panel>
        </div>
        <div className="col-6">
          <Panel header="Calendar">{/* Calendar content */}</Panel>
        </div>
        <div className="col-6">
          <Panel header="Chart">{/* Chart content */}</Panel>
        </div>
        <div className="col-6">
          <Panel header="List">{/* List content */}</Panel>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
