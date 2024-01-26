import Container from "react-bootstrap/Container";
import './registrationForm.css'
import { Link } from "react-router-dom";
const RegisterForm = () => {
    return(
        <>
            <Container fluid className="registerContainer">
                    <div style = {{   fontFamily: 'Monument Extended,sans-serif',
                                textTransform: 'uppercase',
                                fontSize: '1.4rem',
                                letterSpacing: '.1rem'}}> <h1 className="mt-4">Register</h1>                                
                    </div>
                    <form>
                    <div className="form-group">
                            <label htmlFor="exampleInputEmail1">Full Name</label> 
                            <input type="name" 
                            className="form-control" id="exampleName" aria-describedby="nameHelp" placeholder="Enter full name" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleInputEmail1">Email address</label>
                            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                            <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleInputPassword1">Password</label>
                            <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
                        </div>
                        <button type="submit" className="btn btn-primary" id="registerBtn">Register</button>
                          <div className= "loginAction m-3">
                                <Link to="/login"> Already a member? <strong className="clickHere text-violet-700">Click here to sign in!</strong></Link>
                          </div>
                    </form> 
                </Container>
        </>
    )
}
export default RegisterForm