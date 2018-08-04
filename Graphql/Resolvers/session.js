export default {
  Query: {
    findSession: async (parent, args = {}, { User, Session }) => {

      console.log('inside the find session function');

      console.log({ args });

      const session = await Session.find(args);

      if (!session) throw new Error('Session does not exist.');

      return session.map((x) => {
        x._id = x._id.toString();
        return x;
      });
    },
  },
  Mutation: {
    deleteSession: async (parent, { user_id }, { User, Session }) => {
      const session = await Session.remove({ user_id });

      console.log ( session );

      return session;
    },
  },
};
