# Quora Post REST API

This is a RESTful API backend for managing Quora-like posts, built using Node.js and Express.

## Features

- Create, read, update, and delete (CRUD) Quora posts
- Simple and clean API endpoints
- Data stored in memory / or connected to a database (specify if any)
- Easy to extend and integrate with frontend clients

## Installation

1. Clone the repository:

git clone https://github.com/Prathap-bs/Quora-post-rest-api.git

2.Navigate to the project directory:

cd Quora-post-rest-api

3.Install dependencies::

npm install

Usage
Start the server:

npm start

The API will run at http://localhost:8080 (or your specified port).

API Endpoints

| Method | Endpoint     | Description         |
| ------ | ------------ | ------------------- |
| GET    | `/posts`     | Get all posts       |
| GET    | `/posts/:id` | Get a post by ID    |
| POST   | `/posts`     | Create a new post   |
| PUT    | `/posts/:id` | Update a post by ID |
| DELETE | `/posts/:id` | Delete a post by ID |

Contributing
Feel free to submit issues or pull requests to improve this project.

License
This project is licensed under the MIT License.


```bash
