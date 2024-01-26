import Container from "react-bootstrap/Container";
import "./contact.css";

const ContactUs = () => {
  return (
    <>
      <Container fluid className="loginContainer">
        <div
          style={{
            fontFamily: "Monument Extended, sans-serif",
            textTransform: "uppercase",
            fontSize: "1.4rem",
            letterSpacing: ".1rem"
          }}
        >
          <h1 className="mt-4">Contact Us</h1>
        </div>
        <form>
          <div className="form-group">
            <label htmlFor="nameInput">Name</label>
            <input
              type="text"
              className="form-control"
              id="nameInput"
              placeholder="Your Name"
            />
          </div>
          <div className="form-group">
            <label htmlFor="emailInput">Email address</label>
            <input
              type="email"
              className="form-control"
              id="emailInput"
              aria-describedby="emailHelp"
              placeholder="Enter email"
            />
            <small id="emailHelp" className="form-text text-muted">
              We'll never share your email with anyone else.
            </small>
          </div>
          <div className="form-group">
            <label htmlFor="messageTextarea">Message</label>
            <textarea
              className="form-control"
              id="messageTextarea"
              rows="3"
              placeholder="Your Message"
            />
          </div>
          <button type="submit" className="btn btn-primary m-3" id="loginBtn">
            Submit
          </button>
        </form>
      </Container>
    </>
  );
};
export default ContactUs;
