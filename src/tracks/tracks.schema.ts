import { gql } from 'apollo-server';

export const tracksTypeDefs = gql`
	type Query {
		track(id: ID!): Track
		tracks(offset: Int, limit: Int): PaginatedTracks
	}

	type Mutation {
		createTrack(input: CreateTrackInput!): Track
		updateTrack(id: ID!, input: UpdateTrackInput!): Track
		deleteTrack(id: ID!): DeleteResponse
	}

	input CreateTrackInput {
		title: String!
		albumId: String!
		bandsIds: [String]
		duration: Int
		released: Int
		genresIds: [String]
	}

	input UpdateTrackInput {
		title: String
		albumId: String
		bandsIds: [String]
		duration: Int
		released: Int
		genresIds: [String]
	}

	type Track {
		id: ID!
		title: String
		albums: Album
		#albums: [Album]
		bands: [Band]
		duration: Int
		released: Int
		genres: [Genre]
	}

	type PaginatedTracks {
		items: [Track]
		offset: Int
		limit: Int
		total: Int
	}

	type DeleteResponse {
		acknowledged: Boolean!
		deletedCount: Int!
	}
`;
