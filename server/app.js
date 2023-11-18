import express from 'express';
import helmet from 'helmet';


export const makeApp = async () => {
	const app = express();
	app.use(helmet());
	
	return app;
};
