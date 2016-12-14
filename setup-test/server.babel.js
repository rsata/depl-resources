import express from 'express';

const app = express();

// app.use('/', express.static('src'));

app.get('/', (req, res, next)=> {
  console.log('hi');
});

console.log('listening at 3000');
app.listen(3000);
