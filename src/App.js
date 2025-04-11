import React, { useState } from "react";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";

import { ModuleRegistry } from "ag-grid-community";
import { ClientSideRowModelModule } from "ag-grid-community";
ModuleRegistry.registerModules([ClientSideRowModelModule]);

function App() {
  const [showStats, setShowStats] = useState(true);

  const columnDefs = [
    { headerName: "Estimate Name", field: "name" },
    { headerName: "Recurring ACR", field: "recurring" },
    { headerName: "ACR over 3 yrs", field: "total" },
  ];

  const rowData = [
    { name: "estimate34", recurring: "$37", total: "$1434" },
    { name: "est789", recurring: "$17", total: "$6436" },
  ];

  return (
    <div className="flex flex-col h-screen p-4 bg-gray-100">
      
      <div className="w-full flex justify-center mb-4">
        <h1 className="text-2xl font-bold text-gray-800">
          Consumption Estimator
        </h1>
      </div>

      <div className="flex gap-4 mb-4">
        <button className="bg-blue-600 text-white px-4 py-2 rounded shadow hover:bg-blue-700 transition">
          + Create a Consumption Estimate
        </button>
        <button className="flex items-center border border-gray-400 text-gray-700 px-4 py-2 rounded hover:bg-gray-200 transition">
          Import from Azure Pricing Calculator (APC)
        </button>
      </div>

      <button
        className="absolute top-4 right-4 bg-blue-600 text-white px-3 py-1 rounded shadow z-50"
        onClick={() => setShowStats(!showStats)}
      >
        {showStats ? "Hide Stats" : "Show Stats"}
      </button>

      <div className="flex flex-1 pt-2">
        <div
          className={`transition-all duration-300 ${
            showStats ? "w-3/4" : "w-full"
          }`}
        >
          <div className="bg-white p-4 rounded shadow h-full overflow-auto">
            <h2 className="text-xl font-semibold mb-4">Estimates</h2>

            <div className="ag-theme-alpine" style={{ height: "600px", width: "100%" }}>
              <AgGridReact
                rowData={rowData}
                columnDefs={columnDefs}
                defaultColDef={{
                  flex: 1,
                  minWidth: 150,
                  resizable: true,
                }}
              />
            </div>
          </div>
        </div>

        {showStats && (
          <div className="w-1/4 transition-all duration-300 ml-4 bg-white p-4 rounded shadow">

            <h2 className="text-lg font-bold mb-2">Stats</h2>

            <div className="text-sm mb-3">
              <p className="font-semibold text-black">Estimates Created:</p>
              <p className="font-semibold text-black">1</p>
            </div>

            <div className="text-sm mb-3">
              <p className="font-semibold text-black">Opportunities Worked On::</p>
              <p className="font-semibold text-black">1</p>
            </div>

            <div className="text-sm mb-3">
              <p className="font-semibold text-black">ACR for All Milestones:</p>
              <p className="font-semibold text-black">0</p>
            </div>
            
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
