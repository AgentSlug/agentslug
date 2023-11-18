import express from 'express';
import helmet from 'helmet';


const main = async () => {
	const app = express();
	app.use(helmet());

	app.listen(process.env.APP_PORT, () => {
		console.log(`Server is running on port ${process.env.APP_PORT}`);
	});
};

main();
