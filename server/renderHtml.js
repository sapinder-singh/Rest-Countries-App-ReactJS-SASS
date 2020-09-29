import path from 'path';
import fs from 'fs';

import React from 'react';
import ReactDOMServer from 'react-dom/server';
import {StaticRouter} from 'react-router-dom';

import App from '../src/App.jsx';

export default function renderHtml(req, res) {
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
}