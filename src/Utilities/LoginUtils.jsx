export const LoginMutation = `#graphql
mutation LogIn($username: String!, $password: String!) {
  logIn(username: $username, password: $password) {
    token
    user {
      id
      displayName
      username
      email
      chef
    }
  }
}`;
