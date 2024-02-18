import './index.css'
import { products } from './helpers/database'

// Vite + React + TailwindCSS

export function App() {
  console.log(products)

  return (
    <main className='container flex items-center justify-center mx-auto bg-red-500'>
      <div>Hello</div>
      <div>World!</div>
    </main>
  )
}
