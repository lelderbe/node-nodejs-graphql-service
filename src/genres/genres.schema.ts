import { gql } from 'apollo-server';

export const genresTypeDefs = gql`
	type Query {
		"Query to get genres array"
		genres: PaginatedGenres
	}

	"A genre"
	type Genre {
		_id: ID!
		name: String
		description: String
		country: String
		year: String
	}

	type PaginatedGenres {
		items: [Genre]
		limit: Int
		offset: Int
		total: Int
	}
`;
