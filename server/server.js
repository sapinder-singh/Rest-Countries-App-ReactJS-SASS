import express from 'express';
import path from 'path';
import renderHtml from './renderHtml.js';

const PORT = process.env.PORT || 3000;

const app = express();

app.get('/', (req, res) => {
  renderHtml(req, res);
});

app.get('/detail/:countryName', (req, res) => {
  renderHtml(req, res);
});

app.use(express.static(path.resolve('./build')));

app.listen(PORT, () => {
  console.log(`App launched on ${PORT}`);
});
