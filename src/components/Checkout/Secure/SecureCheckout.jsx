import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faUserLock } from "@fortawesome/free-solid-svg-icons";
import React from 'react';

const Securecheckout =() => {
    return(
        <>
            <div style={{ width: '90%', margin: '100px auto', maxWidth: '1300px' }}>
                <FontAwesomeIcon icon={faUserLock} /> <span style={{paddingLeft:'10px'}}>Secure Checkout</span>
                <div className="container mt-5">
                    <p>Please wait few more days...</p>
                </div>
            </div>
        </>
    )
}

export default Securecheckout;