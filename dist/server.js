import express, {} from 'express';
import bodyParser from 'body-parser';
const app = express();
const address = "localhost:3000";
app.use(bodyParser.json());
app.get('/', function (req, res) {
    res.send('Hello World!');
});
app.listen(3000, function () {
    console.log(`starting app on: ${address}`);
});
//# sourceMappingURL=server.js.map