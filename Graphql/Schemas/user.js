export default `
type User {
  _id: String!
  firstName: String!
  secondName: String!
  email: String!
  registered: String!
}
type Query {
  findUser(_id: String!): [User!]!
  login(
    email: String!,
    password: String!
  ): User!
}
type Mutation {
  createUser(
    firstName: String!,
    secondName: String!,
    email: String!,
    password: String!
  ): User!
  deleteUser(
    _id: String!
  ): Session!
}
`;
