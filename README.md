# WebStore-with-Angular-NodeJs-TypeScript-and-Stripe

Full-stack e-commerce web application built with Angular for the frontend, Node.js for the backend, TypeScript for enhanced code quality, and Stripe for handling payments.  It allows users to browse products, add them to the cart, and securely checkout using Stripe's payment gateway.


Features

    Product Catalog: View a list of products with details like name, description, price, and images.
    User Cart: Add products to the cart, adjust quantities, and remove items.
    Checkout Process: Securely process payments using Stripe's payment gateway.
    User Authentication: Register, login, and manage user accounts with authentication middleware.
    Admin Panel: Manage products, orders, and user accounts with administrative privileges.
    Responsive Design: Ensures a seamless experience across devices of all sizes.

Getting Started

-Prerequisites: Ensure you have Node.js.

git clone git@github.com:sohaibssb/WebStore-with-Angular-NodeJs-TypeScript-and-Stripe.git

npm i @angular/cli@14.2.1
npx ng new store --routing --skip-tests --minimal
npx ng serve
npx ng add @angular/material


npm install -D tailwindcss@npm:@tailwindcss/postcss7-compat postcss@^7 autoprefixer@^9
npx tailwindcss init

Add New Component:

npx ng g c ComponentName