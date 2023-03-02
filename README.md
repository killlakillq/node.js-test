# node.js test

### Installation

- Install NodeJS, PostgreSQL and Redis on your system.
- Clone the repository: git clone https://github.com/killlakillq/node.js-test.git
### Install pnpm

```bash
$ npm install -g pnpm
```

### Install dependecies

```bash
$ pnpm install
```

### Configuration
Create a .env file in the project directory and add the following environment variables:
```Bash
# PORT
PORT=3000

# PostgreSQL
POSTGRES_USER=username
POSTGRES_PASSWORD=password
POSTGRES_HOST=host
POSTGRES_DATABASE=database

# Redis
REDIS_HOST=host
REDIS_PORT=port
REDIS_USERNAME=username
REDIS_PASSWORD=password
```
Replace the values with your own PostgreSQL and Redis configurations.

### Running the Server
- Start the server: pnpm start
- The server will be running on port 3000 by default. You can change this by modifying the PORT variable in the .env file.

### Endpoints
- GET /film/:title

Retrieves data for a movie with the specified title.

### Parameters
title: The title of the movie to retrieve.

### Response
- id: The ID of the movie.
- title: The title of the movie.
- release_year: The year the movie was released.
- description: A brief description of the movie.

### Caching
The server caches data in both Node memory and Redis. Data is cached for 15 seconds in Node memory and 30 seconds in Redis.

