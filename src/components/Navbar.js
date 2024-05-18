import React from 'react'
import PropTypes from 'prop-types'


export default function Navbar(props) {
  return (
    <>
       <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
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
          <a className="nav-link" href="/about">{props.aboutText}</a>
        </li>
      </ul>
    </div>
    <div className="form-check form-switch">
  <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckCheckedDisabled" onClick={props.toggleMode}/>
  <label className="form-check-label text-light" htmlFor="flexSwitchCheckCheckedDisabled">Enable darkmode</label>
</div>
  </div>
</nav>
    
    </>
  
  )
}

Navbar.propTypes = {
    title:PropTypes.string.isRequired, // .isRequired is optinal but if u have wriiten it and did not pass value then it will give an error
    aboutText:PropTypes.string

}

//default values will be set if u do not pass the value of props
Navbar.defaultProps = {
    title:"Set Title Here",
    aboutText:"Set About Text Here"
}
