import React from 'react'
import PropTypes from 'prop-types';

export default function Navbar(props) {
    return (
        <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
            <div className="container-fluid">
                <a className="navbar-brand" href="/">{props.title}</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="/">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/">About</a>
                        </li>
                    </ul>
                    <div class="form-check form-switch">
                        <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" />
                        <label class="form-check-label" for="flexSwitchCheckDefault">Enable Dark Mode</label>
                    </div>
                </div>
            </div>
        </nav>
    )
}

//proptyes are used to define the type of data that is passed to the component
//props cannot be changed. They came from where the function is called as in App.js
//props cannot be only string. They can be objects, arrays, numbers, etc.
Navbar.propTypes = {
    title: PropTypes.string
    // title: PropTypes.string.isRequired
    //the above line always requuire the title to be a string from the caller
    //otherwise it will throw an error
}


//when title is not passed from the caller function, it will be set to following default value
Navbar.defaultProps = {
    title: "Set Title Here"
}