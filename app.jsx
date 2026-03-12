import Ballpit from "./Ballpit"

function App() {
  return (
    <div>
      <h1>Time Together</h1>

      <div style={{
        position: "relative",
        overflow: "hidden",
        height: "500px"
      }}>
        <Ballpit count={100} gravity={0.01} />
      </div>

      <div id="timer"></div>
    </div>
  )
}

export default App
import { useEffect } from "react"
import { startTimer } from "./timer"

useEffect(() => {
  startTimer()
}, [])


