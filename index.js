import dotenv from "dotenv";
import express from "express";
import cors from "cors";

import documents from "./Routes/documents.js";
import authenticate from "./Routes/authenticate.js";

( async function () {
	dotenv.config();

	const { PORT } = process.env;
	const app = express();
	app.listen( PORT, () => console.log( 'backend started on port ' + PORT ) );
	app.use( cors() );
	app.use( "/documents", authenticate, documents );
} )();
