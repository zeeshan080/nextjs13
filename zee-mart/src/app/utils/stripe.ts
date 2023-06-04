import Stripe from 'stripe';

const KEY:string = process.env.STRIPE_SECRET_KEY ?? ''
const stripe = new Stripe(KEY, {
  apiVersion: '2022-11-15',
});

export default stripe;