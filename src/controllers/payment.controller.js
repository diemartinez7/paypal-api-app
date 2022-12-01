import axios from 'axios';
import { PAYPAL_API_CLIENT, PAYPAL_API_SECRET, PAYPAL_API_URL } from '../config';


export const createOrder = async (req, res) => {

    const order = {
        intent: 'CAPTURE',
        purchase_units: [
            {
                amount: {
                    currency_code: 'EUR',
                    value: '200'
                },
                description: 'aplication installer photo editing',
            },
        ],
        application_context: {
            brand_name: 'Luna CO',
            landing_page: 'LOGIN',
            user_action: 'PAY_NOW',
            return_url: 'http://localhost:3000/capture-order',
            cancel_url: 'http://localhost:3000/cancel-order'
        }
    };

    const response = await axios.post(`${PAYPAL_API_URL}/v2/checkout/orders`, order, {
        auth: {
            username: PAYPAL_API_CLIENT,
            password: PAYPAL_API_SECRET,
        },
    });

    console.log(response.data);

    res.send('Creating an order');
};

export const captureOrder = (req, res) => {
    res.send('Capturing order')
};

export const cancelOrder = (req, res) => {
    res.send('Cancelling order')
};