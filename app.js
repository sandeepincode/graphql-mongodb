import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import {graphiqlExpress, graphqlExpress} from 'apollo-server-express';
import {makeExecutableSchema} from 'graphql-tools';

import typeDefs from './Graphql/Schemas/user';
import resolvers from './Graphql/Resolvers/resolver';

import { User } from './Mongoose/Schemas/user';

mongoose.connect('mongodb://localhost/yournansdead');

const schema = makeExecutableSchema({
  typeDefs,
  resolvers,
});

const PORT = 3000;

const app = express();

app.use('/graphql', bodyParser.json(), graphqlExpress({ schema, context: { User } }));

app.use('/graphiql', graphiqlExpress({ endpointURL: '/graphql' }));

app.listen(PORT);

console.log('running');