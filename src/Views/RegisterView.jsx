import Button from "../Components/Button/Button"

const RegisterView = () => {
    return (<div>
        <h1>Registration</h1>
        <form>
            <label htmlFor="">Name</label>
            <input 
                className="form-input"
                type="text"
            />
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
                btnName="Sign up"
                classButton="form-button"
            />
        </form>
    </div>)
}

export default RegisterView