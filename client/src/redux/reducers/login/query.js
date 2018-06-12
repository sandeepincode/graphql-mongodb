export default `
Query {
	login (
		$email: String!,
		$password: String!
	): [String]!
}
`;