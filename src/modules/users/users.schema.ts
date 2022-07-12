import { gql } from 'apollo-server';

export const usersTypeDefs = gql`
	type Query {
		user(id: ID!): User
		jwt(email: String!, password: String!): JWT
	}

	type Mutation {
		register(input: CreateUserInput!): User
	}

	input CreateUserInput {
		firstName: String!
		lastName: String!
		password: String!
		email: String!
	}

	type User {
		id: ID!
		firstName: String!
		lastName: String!
		password: String!
		email: String!
	}

	type JWT {
		jwt: String!
	}
`;
