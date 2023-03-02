import { Request, Response } from 'express';
import { setNodeCache, getNodeCache } from '../cache/node';
import { getRedisCache, setRedisCache } from '../cache/redis';
import { db } from '../database/pool';

export const getFilm = async (req: Request, res: Response) => {
	try {
		const { title } = req.params;

		const getCache = getNodeCache(title);
		if (getCache) {
			return res.status(202).send(getCache);
		}

		const getRedis = await getRedisCache(title);
		if (getRedis) {
			return res.status(202).send(getRedis);
		}

		const film = await db.query('SELECT * FROM films WHERE title = ($1)', [title]);
		if (film) {
			setNodeCache(title, JSON.stringify(film.rows[0]), 15);
			await setRedisCache(title, JSON.stringify(film.rows[0]), 30);
			return res.status(202).send(film.rows[0]);
		}
	} catch (error) {
		return res.status(500).send({ message: error });
	}
};
