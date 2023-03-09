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
export const RegisterMutation = gql`
  mutation Register(
    $displayName: String!
    $username: String!
    $email: String!
    $chef: Boolean!
    $password: String!
  ) {
    register(
      displayName: $displayName
      username: $username
      email: $email
      chef: $chef
      password: $password
    ) {
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
