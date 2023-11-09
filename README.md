# Travel Itinerary Management System

This is a Travel Itinerary Management System backend built with Node.js, Express.js, and MongoDB.

## Table of Contents

- [Features](#features)
- [Requirements](#requirements)
- [Installation](#installation)
- [Configuration](#configuration)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Testing](#testing)
- [Documentation](#documentation)
- [Extra Features](#extra-features)
- [Contributing](#contributing)
- [License](#license)

## Features

- User authentication and authorization
- Create, update, delete, and retrieve travel itineraries
- MongoDB for data storage
- JWT-based authentication
- Security measures against common vulnerabilities
- Performance optimization and caching
- Unit tests
- API documentation with Swagger or Postman

## Requirements

- Node.js
- MongoDB
- npm or yarn

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/Adib23704/travel-itinerary-api.git
   ```

2. Install dependencies:

   ```bash
   cd travel-itinerary-api
   npm install
   ```

3. Set up your MongoDB database.

## Configuration

- Create a `.env` file in the root directory with the following configuration:

  ```env
  MONGODB=mongodb+srv://<username>:<password>@<hostname>/<database>?retryWrites=true&w=majority
  PORT=8080
  JWT_SECRET=<your_jwt_secret_here>
  ```

## Usage

```bash
npm start
```

The server will run on `http://localhost:8080`.

## API Endpoints

- User Registration: `POST /user/register`
- User Login: `POST /user/login`
- Create Itinerary: `POST /itinerary/create`
- Update Itinerary: `PUT /itinerary/update/:id`
- Delete Itinerary: `DELETE /itinerary/delete/:id`
- Get User Itineraries: `GET /itinerary/getItineraries`
- Get Itinerary Details: `GET /itinerary/getItineraryDetails/:id`

## Documentation

API documentation is available at [Postman](https://documenter.getpostman.com/view/12398451/2s9YXiaMvj).

## Contributing

Feel free to contribute by [creating issues](https://github.com/Adib23704/travel-itinerary-api/issues) or submitting pull requests.

## License

This project is licensed under the [MIT License](LICENSE).