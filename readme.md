# MyShop eCommerce Platform

> eCommerce platform built with the MERN stack & Redux.

<img src="./frontend/public/images/screens.png">

This project is a simple eCommerce  website with shopping cart and authenticaiton. 

<!-- toc -->

  * [Features](#features)
  * [Usage](#usage)
    + [Env Variables](#env-variables)
    + [Install Dependencies (frontend & backend)](#install-dependencies-frontend--backend)
    + [Seed Database](#seed-database)
    + [Run](#run)
  * [Build & Deploy](#build--deploy)

<!-- tocstop -->

## Features

- Shopping cart
- Product reviews and ratings
- Top products carousel
- Product pagination
- Product search feature
- User profile with orders
- Admin product management
- Admin user management
- Admin Order details page
- Mark orders as delivered option
- Checkout process (shipping, payment method, etc)
- PayPal / credit card integration (not really work for now)
- Database seeder (products & users)

## Usage

- Install MongoDB Community Server on your PC - [MongoDB Community Server ](https://www.mongodb.com/try/download/community)

### Env Variables

Rename the `.env.example` file to `.env`  and add the following (or replace `.env` file content with)

```
NODE_ENV = development
PORT = 5000
MONGO_URI = your mongodb uri
JWT_SECRET = 'abc123'
PAYPAL_CLIENT_ID = your paypal client id
PAGINATION_LIMIT = 8
```

Change the JWT_SECRET and PAGINATION_LIMIT to what you want

### Install Dependencies (frontend & backend)

```
npm install
cd frontend
npm install
```

### Seed Database

You can use the following commands to seed the database with some sample users and products as well as destroy all data

```
# Import data
npm run data:import

# Destroy data
npm run data:destroy
```

```
Sample User Logins

admin@email.com (Admin)
123456

john@email.com (Customer)
123456

jane@email.com (Customer)
123456
```

### Run

At the root folder (outside `frontend` and `backend` folder)

```

# Run frontend (:3000) & backend (:5000)
npm run dev

# Run backend only
npm run server
```

## Build & Deploy

```
# Create frontend prod build
npm run build
```