import redis from 'redis';

const client = redis.createClient(process.env.REDIS_PORT, process.env.REDIS_HOSTNAME, {no_ready_check: true});

client.auth(process.env.REDIS_PASSWORD, (err) => {
  if (err) {
    console.log(`error: ${err}`);
  }
});

client.on('connect', () => {
  console.log(`connected to Redis on port: ${process.env.REDIS_PORT}`);
});

export default client;