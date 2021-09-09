import { NavLink } from "react-router-dom";

const Navigation = () => {
    return (<nav>
        <NavLink to="/" exact>Home</NavLink>
        <NavLink to="/contacts">Contacts</NavLink>
    </nav>)
}

export default Navigation;