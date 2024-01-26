import React from "react";
import Accordion from "react-bootstrap/Accordion";

function DeliveryAccordin() {
    return (
        <Accordion className="accordion">
            <Accordion.Item eventKey="0" className="accordionItem">
                <Accordion.Header>
                    <h2 className="accordionHeading">Free Delivery and Returns</h2>
                </Accordion.Header>
                <Accordion.Body className="accordionBody">
                    <p className="text-start pb-3">
                    <strong>UK Standard Delivery</strong>
                    </p>
                    <p className="text-start pb-3">
                    Free Delivery on all orders over £70 and £3.99 on orders below.
                        <strong> Delivered within 3 - 5 days.</strong>
                    </p>
                    <p className="text-start pb-3">
                    <strong>FREE Same Day Click & Collect</strong>
                    </p>
                    <p className="text-start pb-3">
                        Currently available for delivery to select stores within the UK - enter your postcode at checkout to check availability. When ordering before 3pm, get your order delivered to your local store and ready to collect the same day.
                    </p>
                </Accordion.Body>
            </Accordion.Item>
        </Accordion>
    );
}

export default DeliveryAccordin;
