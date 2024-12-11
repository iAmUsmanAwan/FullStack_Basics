// const express = require('express');

import express from 'express';

const app = express();

app.get('/', (req, res) => {
    res.send('Server is ready');
})

// get a list of 5 jokes

app.get('/api/jokes', async (req, res) => {
    const jokes = [
        {
            id: 1,
            title: 'First Joke',
            joke: 'Why did the chicken cross the road? To get to the other side.'
        },
        {
            id: 2,
            title: 'Second Joke',
            joke: 'Why did the scarecrow win an award? He was outstanding in his field!'
        },
        {
            id: 3,
            title: 'Third Joke',
            joke: 'Why did the bicycle fall over? It was two-tired.'
        },
        {
            id: 4,
            title: 'Fourth Joke',
            joke: `Why don’t eggs tell jokes? They’d crack each other up!`
        },
        {
            id: 5,
            title: 'Fifth Joke',
            joke: 'Why did the math book look sad? It had too many problems.'
        },
    ];
    res.json(jokes);
});


const port = process.env.PORT || 3000 ; 

app.listen(port, () => {
    console.log(`Serve at http://localhost:${port}`);
});