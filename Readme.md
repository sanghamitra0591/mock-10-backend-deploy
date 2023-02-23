## POST - /api/register - This endpoint should allow users to register.

* Body : {
    "name       :   "name",
    "email"     :   "email",
    "password"  :   "password"
}

* Result : Registered


## POST - /api/login - This endpoint should allow users to login.

* Body : {
    "email"     :   "email",
    "password"  :   "password"
}

* Result : {
  "msg": "Login Successful",
  "token": "token"
}


## GET - /api/flights - This endpoint should return a list of all available flights.

* Result : Flight Array


## GET - /api/flights/:id - This endpoint should return the details of a specific flight identified by its ID.

* Result : Single Flight


## POST - /api/flights - This endpoint should allow users to add new flights to the system.


* Body : {
    "airline": "airline",
    "flightNo": "flightNo",
    "departure": "departure",
    "arrival": "arrival",
    "departureTime": "departureTime",
    "arrivalTime": "arrivalTime",
    "seats": 50,
    "price": 3578
}

* Result : Added new Flight


## PATCH - /api/flights/:id - This endpoint should allow users to update the details of a specific flight identified by its ID.

* Body : {
    "seats": 45,
    "price": 34564
}

* Result : Updated Flight with id no


## DELETE - /api/flights/:id - This endpoint should allow users to delete a specific flight identified by its ID.

* Result : Deleted Flight with id no

## POST - /api/booking - This endpoint should allow the user to book flights. 

* Body : {
  "flight": "flightid"
}

* Result : Added new Booking


## GET - /api/dashboard - This point should list all the bookings so far with the user and flight details.


* Result : Booking Array
