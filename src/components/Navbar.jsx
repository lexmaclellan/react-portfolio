function Navbar() {
    return (
        <nav className="fixed-top text-center">
            <div className="row p-3">
                <div className="col-sm-3">
                    <a href="#">About</a>
                </div>
                <div className="col-sm-3">
                    <a href="#">Portfolio</a>
                </div>
                <div className="col-sm-3">
                    <a href="#">Contact</a>
                </div>
                <div className="col-sm-3">
                    <a href="#">Resume</a>
                </div>
            </div>
        </nav>
    )
}

export default Navbar