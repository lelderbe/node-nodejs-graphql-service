import { gql } from 'apollo-server';

export const tracksTypeDefs = gql`
	type Query {
		track(id: ID!): Track
		tracks(offset: Int, limit: Int, filter: FilterTrackInput): PaginatedTracks
	}

	type Mutation {
		createTrack(input: CreateTrackInput!): Track
		updateTrack(id: ID!, input: UpdateTrackInput!): Track
		deleteTrack(id: ID!): DeleteResponse
	}

	input CreateTrackInput {
		title: String!
		albumId: ID
		bandsIds: [ID]
		duration: Int
		released: Int
		genresIds: [ID]
	}

	input UpdateTrackInput {
		title: String
		albumId: ID
		bandsIds: [ID]
		duration: Int
		released: Int
		genresIds: [ID]
	}

	input FilterTrackInput {
		title: String
		albumId: ID
		duration: Int
		released: Int
	}

	type Track {
		id: ID!
		title: String!
		albums: Album
		#albums: [Album]
		bands: [Band]
		duration: Int
		released: Int
		genres: [Genre]
	}

	type PaginatedTracks {
		items: [Track]!
		offset: Int!
		limit: Int!
		total: Int!
	}
`;
