function App() {
  return (
    <div className="bg-[#020617] text-white min-h-screen flex">
      
      {/* Sidebar */}
      <div className="w-64 bg-[#0f172a] p-6 border-r border-slate-800">
        <h1 className="text-2xl font-bold text-green-400 mb-10">
          Threat Monitor
        </h1>

        <ul className="space-y-4">
          <li className="text-slate-300 hover:text-green-400 cursor-pointer">
            Dashboard
          </li>

          <li className="text-slate-300 hover:text-green-400 cursor-pointer">
            Network
          </li>

          <li className="text-slate-300 hover:text-green-400 cursor-pointer">
            Threat Logs
          </li>

          <li className="text-slate-300 hover:text-green-400 cursor-pointer">
            AI Analysis
          </li>

          <li className="text-slate-300 hover:text-green-400 cursor-pointer">
            Settings
          </li>
        </ul>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-8">

        <h1 className="text-4xl font-bold mb-2">
          AI Network Threat Monitor
        </h1>

        <p className="text-slate-400 mb-10">
          Real-time cybersecurity analytics dashboard
        </p>

        {/* Cards */}
        <div className="grid grid-cols-3 gap-6">

          <div className="bg-[#0f172a] p-6 rounded-2xl border border-slate-800">
            <h2 className="text-slate-400 mb-2">
              Threat Score
            </h2>

            <p className="text-5xl font-bold text-red-400">
              87%
            </p>
          </div>

          <div className="bg-[#0f172a] p-6 rounded-2xl border border-slate-800">
            <h2 className="text-slate-400 mb-2">
              Active Connections
            </h2>

            <p className="text-5xl font-bold text-green-400">
              142
            </p>
          </div>

          <div className="bg-[#0f172a] p-6 rounded-2xl border border-slate-800">
            <h2 className="text-slate-400 mb-2">
              Suspicious IPs
            </h2>

            <p className="text-5xl font-bold text-yellow-400">
              12
            </p>
          </div>

        </div>

        {/* Threat Logs */}
        <div className="bg-[#0f172a] mt-10 p-6 rounded-2xl border border-slate-800">
          
          <h2 className="text-2xl font-bold mb-6">
            Recent Threat Logs
          </h2>

          <div className="space-y-4">

            <div className="flex justify-between bg-[#1e293b] p-4 rounded-xl">
              <span>Suspicious Login Attempt</span>
              <span className="text-red-400">HIGH</span>
            </div>

            <div className="flex justify-between bg-[#1e293b] p-4 rounded-xl">
              <span>Port Scan Detected</span>
              <span className="text-yellow-400">MEDIUM</span>
            </div>

            <div className="flex justify-between bg-[#1e293b] p-4 rounded-xl">
              <span>Unknown Device Connected</span>
              <span className="text-orange-400">WARNING</span>
            </div>

          </div>
        </div>

      </div>
    </div>
  )
}

export default App