import React from "react";
import AddNewProjectComponent from "./AddNewProjectComponent";
import { CardComponent } from "./CardComponent";

export default function AssignmentsComponent({searchQuery}) {
  return (
    <div>
      <div className="justify-between items-center ">
      
        <AddNewProjectComponent searchQuery={searchQuery}/>
      </div>
    
    </div>
  );
}
