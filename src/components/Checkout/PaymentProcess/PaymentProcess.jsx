import { NavLink } from 'react-router-dom';

const PaymentProcess = props => {
    return(
        <>
            <div className="totalPriceSection">
                <p> Basket Total: <span>£{(props.total).toFixed(2)}</span></p>
                <hr />

                <p><strong>Total: </strong> <span>£{(props.total).toFixed(2)}</span></p>
                <hr/>
            </div>
            <div className="checkoutOptions" style={{margin: '10px 0px'}}>
                <NavLink to="/securecheckout" end className="bg-violet-600 py-3 px-5 rounded-lg text-white text-1xl" > Secure Checkout </NavLink>

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