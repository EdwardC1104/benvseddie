import express from 'express';
import fs from 'fs';

const app = express();

type Score = {
    [key: string]: number;
};

let score: Score;

fs.readFile('score.json', 'utf8', (err, data) => {
    if (err) {
        console.log(err);
    } else {
        score = JSON.parse(data);
    }
});

app.get('/', (req, res) => {
    res.send('Hello ben!');
});

app.get('/add/:name', (req, res, next) => {
    if (!score) {
        res.status(500).send('Scores not loaded');
    }

    if (!Object.keys(score).includes(req.params.name)) {
        res.status(404).send('User not found');
    }

    score[req.params.name] += 1;

    res.json(score[req.params.name]);

    fs.writeFile('score.json', JSON.stringify(score), 'utf8', (err) => {
        if (err) console.log(err);
    });
    next();
});

export { app };
