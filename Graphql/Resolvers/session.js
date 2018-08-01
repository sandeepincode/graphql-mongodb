export default {
  Query: {
    findSession: async (parent, args, { User, Session }) => {
      const session = await Session.find(args);
      if (!session) {
        return false;
      }
      return session.map((x) => {
        x._id = x._id.toString();
        return x;
      });
    },
  },
  Mutation: {
    deleteUSession: async (parent, args, { User, Session }) => {
      const session = await Session.remove(args);
      session.remove({
        user_id: args._id,
      });
      return !(session.n && session.ok);
    },
  },
};
