import React from 'react'
import { Link } from "react-router-dom";

const NavBar = () => {

    return (
        <div>
            <nav style={{backgroundColor: `#BB1919`}} className="navbar fixed-top navbar-expand-lg navbar-dark">
                <div className="container-fluid">
                    <Link className="navbar-brand" style={{margin:"0px 0px 0px 5vw"}} to="/"><strong>News4All</strong></Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link mx-2" aria-current="page" to="/">Home</Link>
                            </li>
                            <li className="nav-item mx-2"><Link className="nav-link " to="/business">Business</Link></li>
                            <li className="nav-item mx-2"><Link className="nav-link" to="/entertainment">Entertainment</Link></li>
                            <li className="nav-item mx-2"><Link className="nav-link" to="/general">General</Link></li>
                            <li className="nav-item mx-2"><Link className="nav-link" to="/health">Health</Link></li>
                            <li className="nav-item mx-2"><Link className="nav-link" to="/science">Science</Link></li>
                            <li className="nav-item mx-2"><Link className="nav-link" to="/sports">Sports</Link></li>
                            <li className="nav-item mx-2"><Link className="nav-link" to="/technology">Technology</Link></li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )

}

export default NavBar

