import { gql } from 'apollo-server';

export const artistsTypeDefs = gql`
	type Query {
		"Query to get artists array"
		artists: PaginatedArtists
	}

	"A genre"
	type Artist {
		_id: ID!
		firstName: String
		secondName: String
		middleName: String
		birthDate: String
		birthPlace: String
		country: String
		bandsIds: [String]
		instruments: [String]
	}

	type PaginatedArtists {
		items: [Artist]
		limit: Int
		offset: Int
		total: Int
	}
`;
