import path from 'path';
import fs from 'fs';

import React from 'react';
import express from 'express';
import ReactDOMServer from 'react-dom/server';

//import Home from '../components/Home';
import ProdList from '../components/ProdList';

const PORT = 3006; //process.env.PORT || 3006;
const app = express();

app.get('/', (req, res) => {
    //const app = ReactDOMServer.renderToString(<Home />);
    const app = ReactDOMServer.renderToStaticMarkup(<ProdList />);
    
    const indexFile = path.resolve('./public/index.html');
    fs.readFile(indexFile, 'utf8', (err, data) => {
      
      if (err) {
        console.error('Something went wrong:', err);
        return res.status(500).send('Oops, better luck next time!');
      }
  
      return res.send(
        data.replace('<div id="root"></div>', `<div id="root" name="root123" attr1='001'>${app}</div>`)
      );
    });
  });

  app.use(express.static('./build'));
  
  app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
  });