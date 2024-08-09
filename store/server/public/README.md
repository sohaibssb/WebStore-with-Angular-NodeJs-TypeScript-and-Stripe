# Checkout page

Stripe Checkout and the customer portal. The client- and server-side code redirects to a prebuilt payment page hosted on Stripe.

## Running 

1. Build the server

~~~
bundle install
~~~

2. Run the server

~~~
ruby server.rb -o 0.0.0.0
~~~

3. Go to [http://localhost:4242/checkout.html](http://localhost:4242/checkout.html)