import session from './Resolvers/session';
import user from './Resolvers/user';

const resolver = {
  ...session,
  ...user,
};

export default resolver;

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
