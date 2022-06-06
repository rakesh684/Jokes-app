import React from "react"
export default function Navbar(props) {
    return(
         <nav  className={props.darkMode ? "dark": ""}>
                <img className="nav-icon" src="logo192.png" alt="" /> 
                <h3 className="text-1"> ReactFacts</h3>
                <div  className="toggler" >
                <p className="toggler--light">Light</p>
                <div 
                    className="toggler--slider"
                    onClick={props.toggleDarkMode}
                >
                    <div className="toggler--slider--circle"></div>
                </div>
                <p className="toggler--dark">Dark</p>
            </div>
         </nav>
    )
    
}