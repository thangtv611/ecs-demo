import express from 'express';

const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
    console.log(req.headers);
    return res.status(200).json({
        hello: 'world',
    });
});

app.listen(port, () => {
    console.log('app is listening on port ', port);
});
