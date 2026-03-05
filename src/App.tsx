import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-background text-foreground">
      <div className="flex gap-8">
        <a 
          href="https://vite.dev" 
          target="_blank" 
          rel="noreferrer"
          className="transition-transform duration-300 hover:scale-110"
        >
          <img 
            src={viteLogo} 
            className="h-24 p-6 will-change-[filter] transition-[filter] duration-300 hover:[filter:drop-shadow(0_0_2em_#646cffaa)]" 
            alt="Vite logo" 
          />
        </a>
        <a 
          href="https://react.dev" 
          target="_blank" 
          rel="noreferrer"
          className="transition-transform duration-300 hover:scale-110"
        >
          <img 
            src={reactLogo} 
            className="h-24 p-6 will-change-[filter] transition-[filter] duration-300 hover:[filter:drop-shadow(0_0_2em_#61dafbaa)]" 
            alt="React logo" 
          />
        </a>
      </div>
      
      <h1 className="text-5xl font-bold my-8">
        Vite + React
      </h1>
      
      <div className="p-8 text-center">
        <button 
          onClick={() => setCount((count) => count + 1)}
          className="rounded-lg border border-transparent px-5 py-3 text-base font-medium bg-secondary hover:border-primary transition-colors cursor-pointer"
        >
          count is {count}
        </button>
        <p className="mt-4 text-muted-foreground">
          Edit <code className="bg-muted px-2 py-1 rounded text-sm">src/App.tsx</code> and save to test HMR
        </p>
      </div>
      
      <p className="text-muted-foreground text-sm">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  )
}

export default App
