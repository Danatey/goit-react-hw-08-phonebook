
import { useDispatch, useSelector } from "react-redux";

import {logout} from '../../redax/auth/auth-operations'
 
const UserMenu = () => {
    const dispatch = useDispatch();

    const email = useSelector(state => state.auth.user.email);

    return (<div>
        <h1>{ email }</h1>
            <button onClick={() => dispatch(logout())}>Log out</button>
        </div>
    )
}
export default UserMenu