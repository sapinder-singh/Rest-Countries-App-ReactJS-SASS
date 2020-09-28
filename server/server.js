import express from 'express';
import fs from 'fs';
import path from 'path';

import React from 'react';
import ReactDOMServer from 'react-dom/server';
import {StaticRouter} from 'react-router-dom';

import App from '../src/App';

const PORT = process.env.PORT || 3000;

const app = express();

app.use(express.static(path.resolve('./build')))

app.get('*', (req, res) => {

	fs.readFile(path.resolve('./build/index.html'), 'utf-8', (err, data) => {

    if (err) {
      console.log(err);
      res.status(500).send('Some error happened');
		}

		const context = {};
		const app = ReactDOMServer.renderToString(
			<StaticRouter location={req.url} context={context}>
				<App />
			</StaticRouter>
		)
		
    res.send(
      data.replace(
        '<div id="root"></div>',
        `<div id="root">${app}</div>`
      )
    );
	});
	
});

app.listen(PORT, () => {
  console.log(`App launched on ${PORT}`);
});
