function App() {
  return (
    <div style={{
      backgroundColor: "#0f172a",
      color: "white",
      minHeight: "100vh",
      padding: "40px",
      fontFamily: "Arial"
    }}>
      
      <h1 style={{
        fontSize: "40px",
        marginBottom: "20px"
      }}>
        AI Network Threat Monitor
      </h1>

      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(3, 1fr)",
        gap: "20px"
      }}>
        
        <div style={{
          backgroundColor: "#1e293b",
          padding: "20px",
          borderRadius: "12px"
        }}>
          <h2>Threat Score</h2>
          <p>87%</p>
        </div>

        <div style={{
          backgroundColor: "#1e293b",
          padding: "20px",
          borderRadius: "12px"
        }}>
          <h2>Active Connections</h2>
          <p>142</p>
        </div>

        <div style={{
          backgroundColor: "#1e293b",
          padding: "20px",
          borderRadius: "12px"
        }}>
          <h2>Suspicious IPs</h2>
          <p>12</p>
        </div>

      </div>
    </div>
  )
}

export default App