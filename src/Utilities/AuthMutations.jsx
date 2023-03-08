import { gql } from "@apollo/client";

export const LoginMutation = gql`
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
  }
`;
export const getUserQuery = gql`
  query GetCurrentUser {
    getCurrentUser {
      id
      displayName
      username
      email
      chef
    }
  }
`;
