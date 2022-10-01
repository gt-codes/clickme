import { Redis } from '@upstash/redis';

const redis = new Redis({
	url: process.env.UPSTASH_URL as string,
	token: process.env.UPSTASH_TOKEN as string,
});
