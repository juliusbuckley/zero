import express from 'express';
import path from 'path';
import slackRoutes from './routes/slackRoutes';
import redis from './db/redisClient';

redis.flushall();
const app = express();
const port = process.env.PORT || 8080;

app.use(express.static(path.join(__dirname, '../client')));
slackRoutes(app);

app.listen(port, () => {
  console.log(`app.js has been served on port: ${port}`);
});