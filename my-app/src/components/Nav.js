import React, { Link } from "react-router-dom";

const Nav =()=>{
    return (
       <nav className="nav">
        <ul>
            <li className='site-title'> <Link to="/" exact>Home</Link> </li>
            <li className="hover"><Link to="/newpickupline" exact> New Pick Up Lines </Link></li>
            <li ><Link to="/allpickuplines"exact> All Pick Up Lines</Link></li>
            <li><Link to="/success" exact >Success Stories </Link></li>
        </ul>
        </nav>
    )
}

export default Nav