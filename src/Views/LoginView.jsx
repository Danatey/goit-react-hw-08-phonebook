import { useState } from "react";
import { useDispatch } from "react-redux";

import * as authOperations from "../redax/auth/auth-operations";

import Button from "../Components/Button/Button"

const LoginView = () => {
    const dispatch = useDispatch();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleChange = (event) => {
    const { type, value } = event.target;
    switch (type) {
      case "email":
        setEmail(value);
        break;
      case "password":
        setPassword(value);
        break;
      default:
        return;
    }
  };

    const handleSubmit = (event) => {
        event.preventDefault();

        dispatch(authOperations.login({ email, password }));

        reset();
  };

  const reset = () => {
    setEmail("");
    setPassword("");
  };
    return (<div>
        <h1>Login</h1>
        <form onSubmit={handleSubmit}>
            <label htmlFor="">Email</label>
            <input 
                className="form-input"
                type="email"
                onChange={handleChange}
            />
            <label htmlFor="">Password</label>
            <input 
                className="form-input"
                type="password"
                onChange={handleChange}
            />
            <Button
                btnType="submit"
                btnName="Login"
                classButton="form-button"
            />
        </form>
    </div>)
}

export default LoginView