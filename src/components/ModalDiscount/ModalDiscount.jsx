import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import { FaTimes } from 'react-icons/fa';
import promoModal from '../../assets/images/PromoModal.png'
function ModalDiscount(props) {
        return (
            <Modal
                {...props}
                size="md"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Body>
                    <div className="modal-header" style={{position: 'absolute', right: '0px', backgroundColor:'transparent'}}>
                        <div className="close-button">
                            <Button onClick={props.onHide} className="close-button" style={{padding: '10px'}}>
                                <FaTimes size={12} />
                            </Button>
                        </div>
                    </div>
                    <img src={promoModal}></img>
                </Modal.Body>
            </Modal>
        );

}

export default ModalDiscount