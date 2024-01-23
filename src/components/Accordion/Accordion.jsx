import React from "react";
import Accordion from "react-bootstrap/Accordion";

function AllCollapseExample() {
  return (
    <Accordion >
      <Accordion.Item eventKey="0">
        <Accordion.Header >
          <h2>Free Delivery and Returns</h2>
        </Accordion.Header>
        <Accordion.Body>
          <p className="text-start pb-3">
            Free standard delivery with your Nike Membership. 
          </p>
          <p className="text-start pb-3">
            You can return your order free of charge, within 30 days.{" "}
            <strong>Some exclusions apply.</strong></p>
                  </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>
          <h2>Write a Review</h2>
        </Accordion.Header>
        <Accordion.Body>
          <div >
            <h1>Your Review</h1>
            <textarea
              className="form-group reviewContainer mt-4"
              rows="4"
              cols="50"
              placeholder="Write your review..."
            ></textarea>
            <div>
              <label className="mt-4"><h2>Your Rating?</h2></label>
              <div className="star-rating justify-center">
                {[...Array(5)].map((star, index) => (
                  <span key={index} className="star">
                    &#9733;
                  </span>
                ))}
              </div>
            </div>
            <button type="submit" className="reviewBtn btn btn-primary">
              Submit Review
            </button>
          </div>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
}

export default AllCollapseExample;
