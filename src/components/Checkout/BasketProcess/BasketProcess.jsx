import { faCheck } from '@fortawesome/free-solid-svg-icons';
import './basketProcess.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import DeliveryAccordion from '../DeliveryAccordion/DeliverAccordion';
import PaymentProcess from '../PaymentProcess/PaymentProcess';
import PromoAccordion from '../PromoAccordion/PromoAccordion';

const BasketProcess = props => {
    return(
        <>  
        <div className='delivery'>
            <div className='notice'>
                <p>YOU HAVE QUALIFIED FOR</p>
                <p className='bold'>FREE STANDARD DELIVERY</p>
            </div>
            <div className='tick'>
                <FontAwesomeIcon icon={faCheck} />
            </div>
        </div>
        <DeliveryAccordion />
        <PaymentProcess />
        <PromoAccordion />
        </>
    )
}

export default BasketProcess;