import NodeCache from 'node-cache';

export const nodeCache = new NodeCache();

export const setNodeCache = (key: string, value: string | object, ttl: number) => {
	return nodeCache.set(key, value, ttl);
};

export const getNodeCache = (key: string) => {
	return nodeCache.get(key);
};
