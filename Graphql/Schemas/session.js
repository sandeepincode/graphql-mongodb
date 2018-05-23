export default `
type Session {
  user_id: String!
  userAgent: String!
  ip: String!
  created: String!
}
 type Query {
   findSession(_id: String!): String!
 }
 type Mutation {
   deleteSession(_id: String!): Boolean!
 }
`;
