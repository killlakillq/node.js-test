import Redis from 'ioredis';
import * as dotenv from 'dotenv';
dotenv.config();

export const redis = new Redis({
     host: process.env.REDIS_HOST,
     port: Number(process.env.REDIS_PORT),
     username: process.env.REDIS_USERNAME,
     password: process.env.REDIS_PASSWORD,
     db: Number(process.env.REDIS_DATABASE),
});


export const setRedisCache = async (key: string, value: string, ttl: number) => {
	const data = redis.set(key, value);
	redis.expire(key, ttl)
	return data;
}

export const getRedisCache = async (key: string) => {
	return redis.get(key);
}