
  import "./App.css";
  import SidebarComponent from "./components/SidebarComponent";
  import DashboardComponent from "./components/DashboardComponent";
  import TopNavbarComponent from "./components/TopNavbarComponent";
  import LearningMaterialsComponent from "./components/LearningMaterialsComponent";
  import AssignmentsComponent from "./components/AssignmentsComponent";
  import AddNewProjectComponent from "./components/AddNewProjectComponent";
  import { useState } from "react";
  function App() {

    const [searchQuery, setSearchQuery] = useState("")

    const handleSearchQuery = (s) => {
      setSearchQuery(s)
    }
  console.log(searchQuery)

    return (
      <>
         <div className="grid grid-cols-1 lg:grid-cols-12 bg-[#f5f7f8]">
        <div className="lg:col-span-2">
          <SidebarComponent />
        </div>
        <div className="lg:col-span-10 col-span-12">
          <div className="py-3 px-4 lg:pl-7 lg:pr-5">
           <TopNavbarComponent handleSearchQuery={handleSearchQuery}/>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-12">
            <div className="lg:col-span-9 col-span-12">
              <div className="py-3 px-4 lg:pl-7">
               <DashboardComponent />
               </div>
               <div className="pt-3 px-4 lg:pl-7">
               <AssignmentsComponent searchQuery={searchQuery} />
               </div>
            </div>   
            <div className="lg:col-span-3 col-span-12 px-4 lg:px-6 py-3" >
              <LearningMaterialsComponent/>
            </div> 
          </div>
        </div>
      </div>
      </>
    );
  }

  export default App;
