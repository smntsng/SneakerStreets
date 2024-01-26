import { Button } from "react-bootstrap";

const PaymentProcess =() => {
    return(
        <>
            <div className="totalPriceSection">
                <p> Basket Total: </p>
                <hr />
                <p><strong>Total: </strong></p>
                <hr/>
            </div>
            <div className="checkoutOptions">
                <button
                    className="upDown bg-violet-600 py-3 px-5 rounded-lg text-white text-1xl"
                    > Checkout securely
                </button>
                <p>We accept the following payment methods</p>
                <img className="paymenyIcon" src="https://www.jdsports.co.uk/skins/jdsportsuk-desktop/public/img/cards/cards-gb.png"></img>
                <img className="paymenyIn" src="https://www.jdsports.co.uk/skins/default/public/img/cards/paypal-one.png"></img>
                <img className="paymenyIn" src="https://www.jdsports.co.uk/skins/default/public/img/cards/klarna-one.png"></img>
                <img className="paymenyIn" src="https://www.jdsports.co.uk/skins/default/public/img/cards/laybuy-one.png"></img>
                <img className="paymenyIn" src="https://www.jdsports.co.uk/skins/default/public/img/cards/clearpay-one.png"></img>
                <h4>or</h4>

                {/* Extra options */}
                <button
                    className="extraPaymentButton"
                    > Paypal Express
                    <img src="https://www.jdsports.co.uk/skins/default/public/img/cart/logo-payment-pay-pal.svg" />
                </button>
                <button
                    className="extraPaymentButton"
                    > ClearPay Express
                    <img src="https://www.jdsports.co.uk/skins/default/public/img/cart/clearpay-blackonmint.svg" />
                </button>
                <button
                    className="extraPaymentButton"
                    > Paypal Pay Later
                    <img src="https://www.jdsports.co.uk/skins/default/public/img/cart/logo-payment-pay-pal.svg" />
                </button>
                <button
                    className="extraPaymentButton"
                    > Klarna.Express Checkout
                    <img src="https://www.jdsports.co.uk/skins/default/public/img/cart/klarna-pink.svg" />
                </button>
            </div>
        </>
    )
}

export default PaymentProcess;