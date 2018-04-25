export default {
  Query: {
    allUsers: async (parent, args, { User }) => {
      const users = await User.find();
      return users.map( x => {
        x._id = x._id.toString();
        return x;
      });
    },
    findUser: async (parent, args, { User }) => {
      const users = await User.find(args);
      return users.map( x => {
        x._id = x._id.toString();
        return x;
      });
    }
  },
  Mutation: {
    createUser: async (parent, args, { User }) => {
      const user = await new User(args).save();
      user._id = user._id.toString();
      return user;
    }
  }
}


// mutation {
//   createUser(
//     firstName:"John",
//     secondName: "Smith",
//     email: "jsmith@hotmail.com",
//     password: "Jeffrey123"
// ) {
//     _id,
//       firstName,
//       secondName,
//       email
//   }
// }
//
// query {
//   findUser(_id: "5adfab783cf14e0a27ff0234") {
//     firstName,
//       secondName,
//       email,
//       registered
//   }
// }
//
// query {
//   allUsers {
//     _id
//   }
// }