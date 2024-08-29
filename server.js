import express from "express";

const app = express();

app.get("/", (req, res) => {
	const ip = (
		req.ip ||
		req.headers["x-forwarded-for"] ||
		req.socket.remoteAddress
	).split(":")[3];
	res.send(`Your IP address is ${ip}`);
});

app.listen(3000, () => {
	console.log("Server is running on port 3000");
});
