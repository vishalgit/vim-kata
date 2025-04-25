import express from 'express';
import { router } from './routes';
import { logger } from '../utils/logger';
import { connectDB } from './database';
import { errorHandler } from './middleware/error';

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use('/api', router);
app.use(errorHandler);

async function startServer() {
    try {
        await connectDB();
        app.listen(port, () => {
            logger.info(`Server running on port ${port}`);
        });
    } catch (error) {
        logger.error('Failed to start server:', error);
        process.exit(1);
    }
}

startServer(); 