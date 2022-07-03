import { gql } from 'apollo-server';

export const bandsTypeDefs = gql`
	type Query {
		band(id: ID!): Band
		bands(offset: Int, limit: Int): PaginatedBands
	}

	type Mutation {
		createBand(input: CreateBandInput!): Band
		updateBand(id: ID!, input: UpdateBandInput!): Band
		deleteBand(id: ID!): DeleteResponse
	}

	input CreateBandInput {
		name: String!
		origin: String
		website: String
		members: [String]
		genresIds: [String]
	}

	input UpdateBandInput {
		name: String
		members: [String]
		genresIds: [String]
	}

	type Band {
		id: ID!
		name: String
		origin: String
		members: [Artist]
		website: String
		genres: [Genre]
	}

	type PaginatedBands {
		items: [Band]
		offset: Int
		limit: Int
		total: Int
	}

	type DeleteResponse {
		acknowledged: Boolean!
		deletedCount: Int!
	}
`;
