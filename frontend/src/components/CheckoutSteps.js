import React from 'react';
function CheckoutSteps(props) {
  return <div className="checkout-steps">
    <div className={props.step1 ? 'active' : ''} >Iniciar sesión</div>
    <div className={props.step2 ? 'active' : ''} >Envío</div>
    <div className={props.step3 ? 'active' : ''} >Pago</div>
    <div className={props.step4 ? 'active' : ''} >Realizar pedido</div>
  </div>
}

export default CheckoutSteps;