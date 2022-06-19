import express from 'express';
import cors from 'cors';

const server = express();

server.use([cors(), express.json()]);

server.listen(5000);