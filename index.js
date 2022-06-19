import express from 'express';
import cors from 'cors';

const server = express();
server.use([cors(), express.json()]);

const user = [];
const tweets = [{
    username: "bobesponja",
    tweet: "eu amo o hub",
}];


server.get('/sign-up', (req, res) => {
    console.log(req.body);
    res.send(user);
})

server.post('/sign-up', (req, res) => {
    console.log(req.body);
    user.push(req.body);
    res.send("OK");
})


server.listen(5000);