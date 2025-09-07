# URL Shortener

A simple and efficient URL shortening service built with Node.js and Express. This project allows users to shorten long URLs and redirect to the original URLs using the generated short codes.

## Features

- Shorten long URLs to concise, easy-to-share links
- Redirect short URLs to their original destinations
- RESTful API endpoints for integration
- Persistent storage using MongoDB
- Input validation and error handling

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/)
- [MongoDB](https://www.mongodb.com/)

### Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/yourusername/urlShortener.git
    cd urlShortener
    ```
2. Install dependencies:
    ```bash
    npm install
    ```
3. Configure environment variables in a `.env` file:
    ```
    MONGODB_URI=your_mongodb_connection_string
    PORT=3000
    BASE_URL=http://localhost:3000
    ```

### Running the Application

```bash
npm start
```

The server will start on the specified port.

## API Endpoints

### Shorten URL

- **POST** `/api/shorten`
- **Body:** `{ "url": "https://example.com" }`
- **Response:** `{ "shortUrl": "http://localhost:3000/abc123" }`

### Redirect

- **GET** `/:shortCode`
- Redirects to the original URL.

## Folder Structure

```
/urlShortener
  |-- models/
  |-- routes/
  |-- controllers/
  |-- app.js
  |-- README.md
```

