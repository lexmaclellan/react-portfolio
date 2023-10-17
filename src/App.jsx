import { Outlet } from 'react-router-dom'
import './App.css'

import Header from './components/Header'
import Footer from './components/Footer'
import Project from './components/Project'

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