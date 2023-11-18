import { makeApp } from './server.js';

const main = async () => {
	const app = await makeApp();
	app.listen(process.env.APP_PORT, () => {
		console.log(`Server listening on port ${process.env.APP_PORT}`);
	});
};

main();

