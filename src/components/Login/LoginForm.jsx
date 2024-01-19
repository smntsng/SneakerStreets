import Container from "react-bootstrap/Container";
import './loginform.css'
const LoginForm = () => {
    return(
        <>
            <Container fluid className="loginContainer">
                    <p style = {{   fontFamily: 'Monument Extended,sans-serif',
                                textTransform: 'uppercase',
                                fontSize: '1.4rem',
                                letterSpacing: '.1rem'}}>Login
                    </p>
                    <form>
                        <div className="form-group">
                            <label htmlFor="exampleInputEmail1">Email address</label>
                            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                            <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleInputPassword1">Password</label>
                            <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
                        </div>
                        <button type="submit" className="btn btn-primary" id="loginBtn">Login</button>
                    </form>
                </Container>
        </>
    )
}
export default LoginForm