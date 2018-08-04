import bcrypt from 'bcryptjs';

export default {
  Query: {
    findUser: async (parent, args = {}, { User }) => {
      const users = await User.find(args);
      if (!users) {
        return false;
      }
      return users.map((x) => {
        x._id = x._id.toString();
        return x;
      });
    },
    login: async (parent, args, {
      User, Session, UserAgent, IpAddress,
    }) => {
      // get user by email then compare password
      const user = await User.find({
        email: args.emailAddress,
      });
      if (bcrypt.compareSync(args.password, user.password)) {
        new Session({
          user_id: user._id,
          ip: IpAddress,
          userAgent: UserAgent,
        }).save();
        return user._id;
      }
      return false;
    },
  },
  Mutation: {
    createUser: async (parent, args, {
      User, Session, UserAgent, IpAddress,
    }) => {
      const user = await new User(args).save();
      user._id = user._id.toString();
      new Session({
        user_id: user._id,
        userAgent: UserAgent,
        ip: IpAddress,
        active: new Date(),
      }).save();
      return user;
    },
    deleteUser: async (parent, { _id }, { User, Session }) => {

      const user = await User.remove({ _id });
      const session = await Session.remove({ user_id: _id });

      console.log('deleting user');

      return !(user.n && user.ok) && !(session.n && session.ok);
    },
  },
};
