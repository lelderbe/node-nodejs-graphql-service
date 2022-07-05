import { gql } from 'apollo-server';

export const genresTypeDefs = gql`
	type Query {
		genre(id: ID!): Genre
		genres(offset: Int, limit: Int): PaginatedGenres
	}

	type Mutation {
		createGenre(input: CreateGenreInput!): Genre
		updateGenre(id: ID!, input: UpdateGenreInput!): Genre
		deleteGenre(id: ID!): DeleteResponse
	}

	input CreateGenreInput {
		name: String!
		description: String
		country: String
		year: Int
	}

	input UpdateGenreInput {
		name: String
		description: String
		country: String
		year: Int
	}

	type Genre {
		id: ID!
		name: String
		description: String
		country: String
		year: Int
	}

	type PaginatedGenres {
		items: [Genre]
		offset: Int
		limit: Int
		total: Int
	}

	type DeleteResponse {
		acknowledged: Boolean!
		deletedCount: Int!
	}
`;
