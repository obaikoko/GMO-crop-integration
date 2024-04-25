# GMO Crop API

This API provides endpoints to manage information about GMO crops, including their names, benefits, characteristics, regulations, etc. It utilizes the Mongoose library to interact with a MongoDB database.

## Installation

1. Clone this repository.
2. Navigate to the project directory.
3. Install dependencies by running `npm install`.
4. Set up your environment variables by creating a `.env` file in the root directory and specifying your MongoDB connection URI and the desired port. For example:

    ```
    PORT=5000
    MONGODB_URI=mongodb://localhost:27017/gmo_crops
    ```

## Usage

1. Ensure your MongoDB server is running.
2. Start the API server by running `npm start`.
3. You can now access the API endpoints to interact with the GMO crop data.

## Endpoints

### GET `/api/crops`

- Retrieves a list of all GMO crops.

### GET `/api/crops/:id`

- Retrieves details of a specific GMO crop by its ID.

## Middleware

- **Error Handler**: Middleware to handle errors and return appropriate responses.
- **Not Found**: Middleware to handle requests to non-existent routes and return a 404 response.

## Dependencies

- `express`: Web framework for Node.js.
- `cors`: Middleware for enabling CORS (Cross-Origin Resource Sharing).
- `dotenv`: Loads environment variables from a `.env` file into `process.env`.
- `colors`: Library for colorizing console output.
- `mongoose`: MongoDB object modeling tool designed to work in an asynchronous environment.

## Configuration

- MongoDB connection URI and port are configured via environment variables for flexibility and security.

## Contributing

Contributions are welcome! Feel free to open issues or submit pull requests to improve this project.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
