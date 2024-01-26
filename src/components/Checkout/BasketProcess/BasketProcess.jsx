import { faCheck } from '@fortawesome/free-solid-svg-icons';
import './basketProcess.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import DeliveryAccordin from '../DeliveryAccordin/DeliverAccordin';
import PaymentProcess from '../PaymentProcess/PaymentProcess';

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
        <DeliveryAccordin />
        <PaymentProcess />
        </>
    )
}

export default BasketProcess;