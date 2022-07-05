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
		members: [ID]
		genresIds: [ID]
	}

	input UpdateBandInput {
		name: String
		origin: String
		website: String
		members: [ID]
		genresIds: [ID]
	}

	type Band {
		id: ID!
		name: String!
		origin: String
		members: [Artist]
		website: String
		genres: [Genre]
	}

	type PaginatedBands {
		items: [Band]!
		offset: Int!
		limit: Int!
		total: Int!
	}
`;
