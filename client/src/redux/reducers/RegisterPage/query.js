export default `
Mutation {
  createUser(
    $firstName: String!,
    $secondName: String!,
    $email: String!,
    $password: String!,
  ): User!
}
`;
