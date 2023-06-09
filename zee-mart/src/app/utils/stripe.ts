import Stripe from 'stripe';


const STRIPE_SECRET_KEY: string = "sk_test_51NEmcpH0K0u9OIUB4bPRAVwvIIAq0ewd5mq1dKdDF9bM7fhWjz0uWU7IJvEaohj3ubExAWImDhB4CzzQAnwTmyMm00u83nXehX"

const KEY:string = STRIPE_SECRET_KEY 
const stripe = new Stripe(KEY, {
  apiVersion: '2022-11-15',
});

export default stripe;