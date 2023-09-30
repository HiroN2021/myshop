import { useState, useEffect } from "react";
import { Form, Button, Col } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import FormContainer from '../components/FormContainer';
import { savePaymentMethod } from '../slices/cartSlice';
import CheckoutSteps from "../components/CheckoutSteps";

const PaymentScreen = () => {
    const [paymentMethod, setPaymentMethod] = useState('PayPal');

    const cart = useSelector(state => state.cart);
    const { shippingAddress } = cart;

    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        if (!shippingAddress) {
            navigate('/shipping');
        }
    }, [shippingAddress, navigate]);

    function submitHandler(e) {
        e.preventDefault();
        dispatch(savePaymentMethod(paymentMethod));
        navigate('/placeOrder');
    }

    return (
        <FormContainer>
            <CheckoutSteps step1 step2 step3 />

            <h1>Payment Method</h1>

            <Form onSubmit={submitHandler}>

                <Form.Group controlId="address" className="my-2">
                    <Form.Label as='legend'>Select Method</Form.Label>
                    <Col>
                        <Form.Check
                            type="radio"
                            className="my-2"
                            label='Paypal or Credit Card'
                            id="PayPal"
                            value='PayPal'
                            checked
                            onChange={e => setPaymentMethod(e.target.value)}
                        ></Form.Check>
                    </Col>
                </Form.Group>

                <Button type="submit" variant="primary" className="my-2">
                    Continue
                </Button>

            </Form>
        </FormContainer>
    )
}

export default PaymentScreen