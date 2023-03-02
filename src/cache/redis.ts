import Redis from 'ioredis';
import * as dotenv from 'dotenv';
dotenv.config();

export const redis = new Redis({
	host: process.env.REDIS_HOST,
	port: Number(process.env.REDIS_PORT),
	username: process.env.REDIS_USERNAME,
	password: process.env.REDIS_PASSWORD,
});

export const setRedisCache = async (key: string, value: string, ttl: number) => {
	await redis.set(key, value);
	return await redis.expire(key, ttl);
};

export const getRedisCache = async (key: string) => {
	return await redis.get(key);
};
