import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import {graphiqlExpress, graphqlExpress} from 'apollo-server-express';
import {
  makeExecutableSchema,
  mergeSchemas
} from 'graphql-tools';

import typeDefs from './Graphql/Schemas/user';
import resolvers from './Graphql/Resolvers/resolver';

import { User } from './Mongoose/Schemas/user';
import { Session } from './Mongoose/Schemas/session';

mongoose.connect('mongodb://localhost/test');

const schema = makeExecutableSchema({
  typeDefs,
  resolvers,
});

const PORT = 3000;

const app = express();

app.use('/graphql', bodyParser.json(), graphqlExpress({ schema, context: { User, Session } }));

app.use('/graphiql', graphiqlExpress({ endpointURL: '/graphql' }));

app.listen(PORT);

console.log(`Running On Port ${PORT}`);
