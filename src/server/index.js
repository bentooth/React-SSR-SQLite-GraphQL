import express from 'express';
import cors from 'cors';
import React from 'react';
import { renderToString } from 'react-dom/server';
import { Provider } from 'react-redux';
import { StaticRouter, matchPath } from 'react-router-dom';
import serialize from 'serialize-javascript';
import routes from '../shared/routes';
import configureStore from '../shared/configureStore';
import App from '../shared/App';
import 'source-map-support/register';
import bodyParser from 'body-parser';
import jwt from 'express-jwt'
import graphql from 'graphql'
import Schema from './schema';
import { graphqlExpress, graphiqlExpress } from 'graphql-server-express'

const app = express();

app.use(cors());
app.use(express.static('public'));

app.get('/api/albums', (req, res) => {
  res.json([
    {
      id: 1,
      title: 'Album 1',
      date: new Date('2017-04-14T15:30:00.000Z')
    },
    {
      id: 2,
      title: 'Album 2',
      date: new Date('2017-04-14T15:30:00.000Z')
    }
  ]);
});

app.get('*', (req, res, next) => {
  const store = configureStore();

  const promises = routes.reduce((acc, route) => {
    if (matchPath(req.url, route) && route.component && route.component.initialAction) {
      acc.push(Promise.resolve(store.dispatch(route.component.initialAction())));
    }
    return acc;
  }, []);

  Promise.all(promises)
    .then(() => {
      const context = {};
      const markup = renderToString(
        <Provider store={store}>
          <StaticRouter location={req.url} context={context}>
            <App />
          </StaticRouter>
        </Provider>
      );

      const initialData = store.getState();
      res.send(`
        <!DOCTYPE html>
        <html>
          <head>
            <title>W Combinator</title>
            <link rel='stylesheet' href='/css/main.css'>
            <script src='/bundle.js' defer></script>
            <script>window.__initialData__ = ${serialize(initialData)}</script>
          </head>

          <body>
            <div id='root'>${markup}</div>
          </body>
        </html>
      `);
    })
    .catch(next);
});

app.listen(process.env.PORT || 3000, () => {
  console.log('==> 💻  Application server started on: http://localhost:3000');
});


const server = express();

server.use('/graphql', bodyParser.json(), graphqlExpress((req) => {
    // console.log(req)
    return {
        schema: Schema,
        rootValue: req,
    }
}));

server.use('/graphiql', graphiqlExpress({
    endpointURL: '/graphql'
}));


server.listen(process.env.PORT || 4000, () => {
  console.log('==> 💻  GraphQL server started on: http://localhost:4000');
});
