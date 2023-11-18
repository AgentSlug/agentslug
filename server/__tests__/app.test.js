import { describe, it } from 'node:test';
import assert from 'node:assert';
import { makeApp } from '../app.js';

describe('server', () => {
	it('should start the server', async () => {
		const app = await makeApp();
		const server = app.listen(3000);
		server.close();
	});
});
