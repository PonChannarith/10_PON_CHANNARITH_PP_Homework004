import React from "react";
import CardDashbord from "./CardDashbord";
import { dashboard } from "../data/dashboard";
export default function DashboardComponent() {
  return (
    <div>
      <h2 className="text-xl font-semibold mb-5">Dashboard</h2>
      <div className="grid grid-cols md:grid-cols-2 lg:grid-cols-4 gap-5">
        {dashboard.map((items) => (
          <CardDashbord
            color={items.color}
            price={items.totalTasks}
            dec={items.label}
          />
        ))}
      </div>
    </div>
  );
}
