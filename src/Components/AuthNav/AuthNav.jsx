import { NavLink } from "react-router-dom";

import './AuthNav.scss'

const AuthNav = () => {
    return (<div className='auth-nav'>
        <NavLink to="/register">Register</NavLink>
        <NavLink to="/login">Login</NavLink>
    </div>)
}

export default AuthNav;