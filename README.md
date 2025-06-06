# Backend


## Project Structure
- **src/**: Contains all the source code for the backend application.
  - **index.ts**: Entry point of the application, sets up the GraphQL server and middleware.
  - **schema/**: Contains GraphQL schema definitions.
    - **user.graphql**: Defines the User model schema, including types, queries, and mutations.
  - **resolvers/**: Contains resolver functions for handling GraphQL operations.
    - **userResolver.ts**: Handles user-related queries and mutations.
  - **models/**: Contains data models for the application.
    - **user.ts**: Defines the structure of the user object and database interactions.
  - **middleware/**: Contains middleware functions for authentication and authorization.
    - **auth.ts**: Middleware for verifying JWT tokens and protecting routes.
  - **utils/**: Contains utility functions for session management.
    - **session.ts**: Functions for creating, validating, and destroying user sessions.
  - **types/**: Contains TypeScript interfaces and types used throughout the application.
    - **index.ts**: Exports common types for GraphQL requests and responses.

## Getting Started

### Prerequisites
- Node.js (version 14 or higher)
- npm or yarn

### Installation
1. Clone the repository:
   ```
   git clone <repository-url>
   ```
2. Navigate to the backend directory:
   ```
   cd lattice-backend
   ```
3. Install dependencies:
   ```
   npm install
   ```
   or
   ```
   yarn install
   ```

### Running the Application
To start the server, run:
```
npm start
```
or
```
yarn start
```
The server will be available at `http://localhost:4000`.

### Running Tests
To run the tests, use:
```
npm test
```
or
```
yarn test
```

## Features
- User registration and login
- JWT-based authentication
- Session management
- GraphQL API for user operations

## Contributing
Contributions are welcome! Please open an issue or submit a pull request for any enhancements or bug fixes.

