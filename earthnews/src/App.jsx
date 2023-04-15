import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      {messages.map((message, i) => (
        <p key={i}>
          <span>{message.author}: </span>
          <span style={{ whiteSpace: "pre-wrap" }}>
            {message.body ?? "..."}
          </span>
        </p>
      ))}
      <form onSubmit={(e) => {
        e.preventDefault();
        setNewMessageText("");
        sendMessage(newMessageText);
      }}>
        <input
          value={newMessageText}
          onChange={e => setNewMessageText(e.target.value)}
          placeholder="Write a message…"
        />
        <input type="submit" value="Send" disabled={!newMessageText} />
      </form>
    </div>
    // <div className="App">
    //   <div>
    //     <a href="https://vitejs.dev" target="_blank">
    //       <img src={viteLogo} className="logo" alt="Vite logo" />
    //     </a>
    //     <a href="https://reactjs.org" target="_blank">
    //       <img src={reactLogo} className="logo react" alt="React logo" />
    //     </a>
    //   </div>
    //   <h1>Vite + React</h1>
    //   <div className="card">
    //     <button onClick={() => setCount((count) => count + 1)}>
    //       count is {count}
    //     </button>
    //     <p>
    //       Edit <code>src/App.jsx</code> and save to test HMR
    //     </p>
    //   </div>
    //   <p className="read-the-docs">
    //     Click on the Vite and React logos to learn more
    //   </p>
    //   <div className="reactGPT-app">
        
    //   </div>
      
    // </div>
    
  )
}
