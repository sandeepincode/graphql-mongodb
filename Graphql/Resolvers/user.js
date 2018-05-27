export default {
  Query: {
    allUsers: async (parent, args, { User }) => {
      const users = await User.find();
      return users.map((x) => {
        x._id = x._id.toString();
        return x;
      });
    },
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
    login: async (parent, args, { User, Session }) => {
      const user = await User.find(args);
      if (!user) {
        return 'No User Found';
      }
      const session = await new Session({
        user_id: user._id,
        ip: '127.0.0.1',
        userAgent: 'your Maa',
      }).save();
      return user._id;
    },
  },
  Mutation: {
    createUser: async (parent, args, { User, Session }, after, x) => {
      console.log(parent);
      console.log(args);
      console.log(after);
      console.log(x)

      const user = await new User(args).save();
      user._id = user._id.toString();
      const session = await new Session({
        user_id: user._id,
        userAgent: 'Your Daa',
        ip: 'localhost',
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
