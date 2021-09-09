import Button from "../Components/Button/Button"

const LoginView = () => {
    return (<div>
        <h1>Login</h1>
        <form>
            <label htmlFor="">Email</label>
            <input 
                className="form-input"
                type="email"
            />
            <label htmlFor="">Password</label>
            <input 
                className="form-input"
                type="password"
                minlength="8"
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