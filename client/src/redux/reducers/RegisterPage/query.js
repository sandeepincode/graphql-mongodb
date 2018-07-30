export default `
mutation CreateUser(
  $firstName: String!,
  $secondName: String!,
  $email: String!,
  $password: String!) {
    createUser(
      firstName: $firstName,
      secondName: $secondName,
      email: $email,
      password: $password
     ) {
        _id,
        firstName,
        secondName,
        email
    }
  }
`;
