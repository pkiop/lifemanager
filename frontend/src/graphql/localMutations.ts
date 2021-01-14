export const setUser = `
  mutation SetUser(
    $username: String!
  ) {
    setUser(
      username: $username
    ) @client {
      true
    }
  }
`;

export default {};
