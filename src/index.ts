import express from 'express';
import { ApolloServer } from 'apollo-server-express';
import { createConnection } from 'typeorm';
import { typeDefs } from './schema/user.graphql';
import { resolvers } from './resolvers/userResolver';
import { authMiddleware } from './middleware/auth';
import { sessionMiddleware } from './utils/session';

const startServer = async () => {
    const app = express();

    // Initialize session middleware
    app.use(sessionMiddleware);

    // Connect to the database
    await createConnection();

    // Create Apollo Server
    const server = new ApolloServer({
        typeDefs,
        resolvers,
        context: ({ req }) => {
            // Add authentication info to context
            const user = authMiddleware(req);
            return { user };
        },
    });

    // Apply middleware to connect Apollo Server with Express
    server.applyMiddleware({ app });

    // Start the server
    const PORT = process.env.PORT || 4000;
    app.listen(PORT, () => {
        console.log(`Server is running on http://localhost:${PORT}${server.graphqlPath}`);
    });
};

startServer().catch(error => {
    console.error('Error starting the server:', error);
});