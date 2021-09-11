import { useState } from "react";
import { useDispatch } from "react-redux";

import * as authOperations from "../redax/auth/auth-operations";

import Button from "../Components/Button/Button"

const RegisterView = () => {
    const dispatch = useDispatch();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleChange = (event) => {
    const { type, value } = event.target;
    switch (type) {
      case "text":
        setName(value);
        break;
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

        dispatch(authOperations.register({ name, email, password }));

        reset();
  };

  const reset = () => {
    setName("");
    setEmail("");
    setPassword("");
  };
    
    return (<div>
        <h1>Registration</h1>
        <form onSubmit={handleSubmit}>
            <label htmlFor="">Name</label>
            <input 
                className="form-input"
                type="text"
                onChange={handleChange}
            />
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
                btnName="Sign up"
                classButton="form-button"
            />
        </form>
    </div>)
}

export default RegisterView