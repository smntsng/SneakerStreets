import React from "react";
import Accordion from "react-bootstrap/Accordion";

function PromoAccordion() {
    return (
        <Accordion className="accordion" style={{marginTop:'15px'}}>
            <Accordion.Item eventKey="0" className="accordionItem">
                <Accordion.Header>
                    <h2 className="accordionHeading">Add Discount / Promo code</h2>
                </Accordion.Header>
                <Accordion.Body className="accordionBody">
                <section>
                        <div className= "container-signup">
                            <form className= "signup-form">
                                <input className= "input promo" placeholder="Promo Code" type= "text" required/>
                                <button type= "submit" className= "promo-button">Apply</button>
                            </form>
                        </div>
                    </section>
                    <p className="text-start pb-3">
                        Gift cards are not accepted online.
                    </p>
                </Accordion.Body>
            </Accordion.Item>
        </Accordion>
    );
}

export default PromoAccordion;
