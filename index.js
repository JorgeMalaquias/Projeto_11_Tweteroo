import express from 'express';
import cors from 'cors';

const server = express();
server.use([cors(), express.json()]);

const user = [{
    username: "bobesponja",
    avatar: "https://super.abril.com.br/wp-content/uploads/2020/09/04-09_gato_SITE.jpg?quality=70&strip=info"
}];
const tweets = [{
    username: "bobesponja",
    tweet: "eu amo o hub",
}];


function findingAvatar(userName) {
    const userToFindAvatar = user.find((u) => u.username === userName);
    return userToFindAvatar.avatar;
}
function tweet(t) {
    const obj = {
        username: t.username,
        avatar: findingAvatar(t.username),
        tweet: t.tweet
    }
    return obj;
}
server.post('/sign-up', (req, res) => {
    user.push(req.body);
    res.send("OK");
})
server.post('/tweets', (req, res) => {
    tweets.push(req.body);
    res.send("OK");
})

server.get('/tweets', (req, res) => {
    if (tweets.length > 10) {
        res.send((tweets.slice(tweets.length - 10, tweets.length)).map(tweet));
    } else {
        res.send(tweets.map(tweet));
    }
})


server.listen(5000);