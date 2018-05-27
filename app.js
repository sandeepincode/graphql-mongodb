import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import { graphiqlExpress, graphqlExpress } from 'apollo-server-express';
import { makeExecutableSchema } from 'graphql-tools';

import typeDefs from './Graphql/typeDefs';
import resolvers from './Graphql/resolver';

import { User } from './Mongoose/Schemas/user';
import { Session } from './Mongoose/Schemas/session';

mongoose.connect('mongodb://localhost/test');

const schema = makeExecutableSchema({
  typeDefs,
  resolvers,
});

const helperMiddleware = [
  bodyParser.json(),
  bodyParser.text({ type: 'application/graphql' }),
  (req, res, next) => {
    // console.log(req.headers);
    if (req.is('application/graphql')) {
      req.body = { query: req.body };
    }
    next();
  },
];

const PORT = 3000;

const app = express();

app.use('/graphql', ...helperMiddleware, graphqlExpress({ schema, context: { User, Session } }));
// app.use('/graphql', bodyParser.json(), graphqlExpress({ schema, context: { User, Session } }));

app.use('/graphiql', graphiqlExpress({ endpointURL: '/graphql' }));

app.listen(PORT);

console.log(`Running On Port ${PORT}`);
