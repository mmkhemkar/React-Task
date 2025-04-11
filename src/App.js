import { useState } from "react";

function App() {
  const [showStats, setShowStats] = useState(true);
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
            <table className="min-w-full border">
              <thead>
                <tr className="bg-gray-200">
                  <th className="border px-4 py-2">Estimate Name</th>
                  <th className="border px-4 py-2">Recurring ACR</th>
                  <th className="border px-4 py-2">ACR over 3 yrs</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border px-4 py-2">estimate34</td>
                  <td className="border px-4 py-2">$37,708</td>
                  <td className="border px-4 py-2">$1,198,305</td>
                </tr>
                <tr>
                  <td className="border px-4 py-2">est789</td>
                  <td className="border px-4 py-2">$17,927</td>
                  <td className="border px-4 py-2">$627,436</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Stats Panel */}
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
