require('dotenv').config();
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

async function createStripeCustomer() {
  try {
    // We send a request to Stripe to create a new person in their system
    const customer = await stripe.customers.create({
      name: 'Tester McTesterson',
      email: 'test@example.com',
      description: 'My first API customer',
    });

    console.log("✅ Success! Customer created in Stripe.");
    console.log("🆔 Customer ID:", customer.id); // This starts with 'cus_...'
  } catch (error) {
    console.error("❌ Stripe Error:", error.message);
  }
}

createStripeCustomer();