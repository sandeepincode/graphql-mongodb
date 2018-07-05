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
    
    // if ( res.headers['xx-gql-key'] !== AUTH_KEY ){
    //   const error = new error('Not Autharised');
    //   return res.send();
    // }
    
    next();
  },
];

const PORT = 3009;
const app = express();

app.use('/graphql', ...helperMiddleware, graphqlExpress(req => {
  
  const UserAgent = req.headers['user-agent'];
  const IpAddress = req.connection.remoteAddress;

  console.log( req.connection.remoteAddress );
    return {
      schema,
      context: {
        User,
        Session,
        UserAgent,
        IpAddress,
      },
    };
  })
);

app.use('/graphiql', graphiqlExpress({ endpointURL: '/graphql' }));

app.listen(PORT);
 
console.log(`Running On Port ${PORT}`);

// app.use('/graphql', bodyParser.json(), graphqlExpress({ schema, context: { User, Session } }));
