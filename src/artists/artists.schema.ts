import { gql } from 'apollo-server';

export const artistsTypeDefs = gql`
	type Query {
		artists(offset: Int, limit: Int): PaginatedArtists
	}

	type Artist {
		id: ID!
		firstName: String
		secondName: String
		middleName: String
		birthDate: String
		birthPlace: String
		country: String
		bands: [Band]
		#bandsIds: [String]
		instruments: [String]
		#instruments: String
	}

	type PaginatedArtists {
		items: [Artist]
		offset: Int
		limit: Int
		total: Int
	}
`;
