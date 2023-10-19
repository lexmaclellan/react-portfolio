import { Outlet } from 'react-router-dom'
import './App.css'

import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'

function App() {
  return (
    <main className='container-fluid'>
      <Header />
      <article className='container-fluid'>
        <Outlet />
      </article>
      <Footer />
    </main>
  )
}

export default App