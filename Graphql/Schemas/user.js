export default `
type User {
  _id: String!
  firstName: String!
  secondName: String!
  email: String!
  registered: String!
}
type Query {
  allUsers: [User!]!
  findUser(_id: String!): [User!]!
}
type Mutation {
  createUser(
  firstName: String!,
  secondName: String!,
  email: String!,
  password: String!,
  ): User!
}
`;