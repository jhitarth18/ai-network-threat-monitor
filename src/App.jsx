import {
  ShieldAlert,
  Activity,
  Wifi,
  BrainCircuit,
} from "lucide-react"

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts"

import { motion } from "framer-motion"

const data = [
  { time: "1PM", threats: 12 },
  { time: "2PM", threats: 19 },
  { time: "3PM", threats: 9 },
  { time: "4PM", threats: 27 },
  { time: "5PM", threats: 14 },
  { time: "6PM", threats: 31 },
]

function App() {
  return (
    <div className="bg-[#020617] text-white min-h-screen flex">

      {/* Sidebar */}
      <div className="w-64 bg-[#0f172a] border-r border-slate-800 p-6">

        <h1 className="text-3xl font-bold text-green-400 mb-12">
          Threat Monitor
        </h1>

        <div className="space-y-6">

          <div className="flex items-center gap-3 text-slate-300 hover:text-green-400 cursor-pointer">
            <ShieldAlert />
            <span>Dashboard</span>
          </div>

          <div className="flex items-center gap-3 text-slate-300 hover:text-green-400 cursor-pointer">
            <Wifi />
            <span>Network</span>
          </div>

          <div className="flex items-center gap-3 text-slate-300 hover:text-green-400 cursor-pointer">
            <Activity />
            <span>Threat Logs</span>
          </div>

          <div className="flex items-center gap-3 text-slate-300 hover:text-green-400 cursor-pointer">
            <BrainCircuit />
            <span>AI Analysis</span>
          </div>

        </div>
      </div>

      {/* Main */}
      <div className="flex-1 p-8">

        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h1 className="text-5xl font-bold">
            AI Network Threat Monitor
          </h1>

          <p className="text-slate-400 mt-3">
            Real-time cybersecurity analytics dashboard
          </p>
        </motion.div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-6 mt-10">

          <motion.div
            whileHover={{ scale: 1.03 }}
            className="bg-[#0f172a] p-6 rounded-2xl border border-slate-800"
          >
            <p className="text-slate-400">
              Threat Score
            </p>

            <h2 className="text-5xl font-bold text-red-400 mt-4">
              87%
            </h2>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.03 }}
            className="bg-[#0f172a] p-6 rounded-2xl border border-slate-800"
          >
            <p className="text-slate-400">
              Active Connections
            </p>

            <h2 className="text-5xl font-bold text-green-400 mt-4">
              142
            </h2>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.03 }}
            className="bg-[#0f172a] p-6 rounded-2xl border border-slate-800"
          >
            <p className="text-slate-400">
              Suspicious IPs
            </p>

            <h2 className="text-5xl font-bold text-yellow-400 mt-4">
              12
            </h2>
          </motion.div>

        </div>

        {/* Chart */}
        <div className="bg-[#0f172a] mt-10 p-6 rounded-2xl border border-slate-800">

          <h2 className="text-2xl font-bold mb-6">
            Threat Activity
          </h2>

          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={data}>
              <XAxis dataKey="time" />
              <YAxis />
              <Tooltip />
              <Line
                type="monotone"
                dataKey="threats"
                stroke="#22c55e"
                strokeWidth={3}
              />
            </LineChart>
          </ResponsiveContainer>

        </div>

        {/* Logs */}
        <div className="bg-[#0f172a] mt-10 p-6 rounded-2xl border border-slate-800">

          <h2 className="text-2xl font-bold mb-6">
            Live Threat Feed
          </h2>

          <div className="space-y-4">

            <motion.div
              whileHover={{ scale: 1.01 }}
              className="flex justify-between bg-[#1e293b] p-4 rounded-xl"
            >
              <span>SQL Injection Attempt</span>
              <span className="text-red-400">CRITICAL</span>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.01 }}
              className="flex justify-between bg-[#1e293b] p-4 rounded-xl"
            >
              <span>Port Scan Detected</span>
              <span className="text-yellow-400">MEDIUM</span>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.01 }}
              className="flex justify-between bg-[#1e293b] p-4 rounded-xl"
            >
              <span>Unknown Device Connected</span>
              <span className="text-orange-400">WARNING</span>
            </motion.div>

          </div>

        </div>

      </div>
    </div>
  )
}

export default App