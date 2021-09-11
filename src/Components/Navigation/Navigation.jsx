import { NavLink } from "react-router-dom";

import './Navigation.scss'

const Navigation = () => {
    return (<nav>
        <NavLink to="/contacts">Contacts</NavLink>
    </nav>)
}

export default Navigation;