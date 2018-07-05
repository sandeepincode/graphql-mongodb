export default {
  Query: {
    findUser: async (parent, args, { User }) => {
      const users = await User.find(args);
      if (!users) {
        return false;
      }
      return users.map((x) => {
        x._id = x._id.toString();
        return x;
      });
    },
    login: async (parent, args, { User, Session, UserAgent, IpAddress }) => {

      const user = await User.find(args);
      const session = await new Session({
        user_id: user._id,
        ip: IpAddress,
        userAgent: UserAgent,
      }).save();

      return user._id;
    },
  },
  Mutation: {
    createUser: async (parent, args, { User, Session, UserAgent, IpAddress }) => {

      console.log(UserAgent);

      const user = await new User(args).save();
      user._id = user._id.toString();
      
      const session = await new Session({
        user_id: user._id,
        userAgent: UserAgent,
        ip: IpAddress,
        active: new Date()
      }).save();
      
      return user;
    },
    deleteUser: async (parent, args, { User, Session }) => {
      const user = await User.remove(args);
      const session = await Session.remove({
        user_id: args._id,
      });
      if (user.n && user.ok) {
        return false;
      }
      return true;
    },
  },
};
