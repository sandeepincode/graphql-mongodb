export default `
type Session {
  _id: String! @unique
  user_id: String @unique
  userAgent: String
  ip: String
  active: String
  created: String
}
 type Query {
   findSession(_id: String!): Session!
 }
 type Mutation {
   deleteSession(user_id: String!): Session!
 }
`;
