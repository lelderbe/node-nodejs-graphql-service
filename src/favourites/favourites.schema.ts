import { gql } from 'apollo-server';

export const favouritesTypeDefs = gql`
	type Query {
		getAll: Favourites
	}

	type Mutation {
		addTrackToFavourites(id: String!): Favourites
		addBandToFavourites(id: String!): Favourites
		addArtistToFavourites(id: String!): Favourites
		addGenreToFavourites(id: String!): Favourites
	}

	type Favourites {
		id: ID!
		userId: ID
		bands: [Band]
		genres: [Genre]
		artists: [Artist]
		tracks: [Track]
	}
`;
