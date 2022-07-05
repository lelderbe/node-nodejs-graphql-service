import { gql } from 'apollo-server';

export const artistsTypeDefs = gql`
	type Query {
		artist(id: ID!): Artist
		artists(offset: Int, limit: Int): PaginatedArtists
	}

	type Mutation {
		createArtist(input: CreateArtistInput!): Artist
		updateArtist(id: ID!, input: UpdateArtistInput!): Artist
		deleteArtist(id: ID!): DeleteResponse
	}

	input CreateArtistInput {
		firstName: String!
		secondName: String!
		middleName: String
		birthDate: String
		birthPlace: String
		country: String
		bandsIds: [String]
		instruments: [String]
	}

	input UpdateArtistInput {
		firstName: String
		secondName: String
		middleName: String
		birthDate: String
		birthPlace: String
		country: String
		bandsIds: [String]
		instruments: [String]
	}

	type Artist {
		id: ID!
		firstName: String!
		secondName: String!
		middleName: String
		birthDate: String
		birthPlace: String
		country: String
		bands: [Band]
		instruments: [String]
	}

	type PaginatedArtists {
		items: [Artist]!
		offset: Int!
		limit: Int!
		total: Int!
	}
`;
