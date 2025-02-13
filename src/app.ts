import express, { json, Request, Response } from "express";

const app = express();

app.use(json());

app.get(
	"/hello-world/:something",
	(req: Request<{ something: string }>, res: Response, _) => {
		const something = req.params.something;
		const strippedSomething = sanitizeString(something);
		res.send({
			message: "Hello, world!",
			something: strippedSomething,
		});
	}
);

app.listen(3000, () => {
	console.log("server is listening");
});

function sanitizeString(str: string): string {
	return str.replace(/[^a-zA-Z ]/g, "");
}
