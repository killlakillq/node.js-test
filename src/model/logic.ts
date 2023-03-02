import { Request, Response } from 'express';
import { setNodeCache, getNodeCache } from '../cache/node';
import { getRedisCache, setRedisCache } from '../cache/redis';
import { db } from '../database/pool';

export const getFilm = async (req: Request, res: Response) => {
     try {
		const { title } = req.params;
		const film = await db.query(
			'SELECT * FROM films WHERE title = ($1)',
			[title]
		);
		
          const dataSetCache = await setNodeCache(title, film.rows[0], 15000);
          const dataGetCache = await getNodeCache(title);
          if (dataSetCache) {
               return res.status(202).send(dataGetCache);
          }

		const dataSetRedis = await setRedisCache(title, film.rows[0], 30000);
		const dataGetRedis = await getRedisCache(title);
		if (dataSetRedis) {
               return res.status(202).send(dataGetRedis);
          }

          if (film.rows[0] === undefined) {
               return res.status(404).send({ message: 'Not Found' });
          }
          return res.status(202).send(film.rows[0]);
     } catch (error) {
          return res.status(500).send({ message: error });
     }
};
