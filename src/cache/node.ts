import NodeCache from 'node-cache';

export const nodeCache = new NodeCache();

export const setNodeCache = async (key: string, value: string | object, ttl: number) => {
	return nodeCache.set(key, value, ttl);
}

export const getNodeCache = async (key: string) => {
	return nodeCache.get(key);
}