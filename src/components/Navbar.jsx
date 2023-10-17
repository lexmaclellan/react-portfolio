import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'

function Navbar() {
    const [currentPage, setCurrentPage] = useState('About')

    return (
        <nav className="fixed-top text-center">
            <div className="row p-3">
                <div className="col-sm-3">
                    <Link to='/'>About</Link>
                </div>
                <div className="col-sm-3">
                    <NavLink to='/Portfolio'>Portfolio</NavLink>
                </div>
                <div className="col-sm-3">
                    <NavLink to='/Contact'>Contact</NavLink>
                </div>
                <div className="col-sm-3">
                    <NavLink to='/Resume'>Resume</NavLink>
                </div>
            </div>
        </nav>
    )
}

export default Navbar