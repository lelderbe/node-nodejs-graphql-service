import { gql } from 'apollo-server';

export const albumsTypeDefs = gql`
	type Query {
		album(id: ID!): Album
		albums(offset: Int, limit: Int): PaginatedAlbums
	}

	type Mutation {
		createAlbum(input: CreateAlbumInput!): Album
		updateAlbum(id: ID!, input: UpdateAlbumInput!): Album
		deleteAlbum(id: ID!): DeleteResponse
	}

	input CreateAlbumInput {
		name: String!
		released: Int
		artistsIds: [String]
		bandsIds: [String]
		trackIds: [String]
		genresIds: [String]
		image: String
	}

	input UpdateAlbumInput {
		name: String
		released: Int
		artistsIds: [String]
		bandsIds: [String]
		trackIds: [String]
		genresIds: [String]
		image: String
	}

	type Album {
		id: ID!
		name: String
		released: Int
		artists: [Artist]
		bands: [Band]
		tracks: [Track]
		genres: [Genre]
		image: String
	}

	type PaginatedAlbums {
		items: [Album]
		offset: Int
		limit: Int
		total: Int
	}

	type DeleteResponse {
		acknowledged: Boolean!
		deletedCount: Int!
	}
`;
