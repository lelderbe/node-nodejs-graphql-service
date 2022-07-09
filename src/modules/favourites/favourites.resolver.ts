import { Favourites } from './favourites.interface';

export const favouritesResolver = {
	Query: {
		favourites: (parent, args, { dataSources }) => {
			return dataSources.favouritesService.getAll();
		},
	},

	Mutation: {
		addTrackToFavourites: (parent, { id }, { dataSources }) => {
			const input = { type: 'tracks', id };
			return dataSources.favouritesService.addToFavourites(input);
		},

		addBandToFavourites: (parent, { id }, { dataSources }) => {
			const input = { type: 'bands', id };
			return dataSources.favouritesService.addToFavourites(input);
		},

		addArtistToFavourites: (parent, { id }, { dataSources }) => {
			const input = { type: 'artists', id };
			return dataSources.favouritesService.addToFavourites(input);
		},

		addGenreToFavourites: (parent, { id }, { dataSources }) => {
			const input = { type: 'genres', id };
			return dataSources.favouritesService.addToFavourites(input);
		},
	},

	Favourites: {
		id: (parent: Favourites) => {
			return parent._id;
		},

		bands: (parent: Favourites, args, { dataSources }) => {
			return parent.bandsIds?.map((id) => dataSources.bandsService.findOne(id));
		},

		genres: (parent: Favourites, args, { dataSources }) => {
			return parent.genresIds?.map((id) => dataSources.genresService.findOne(id));
		},

		artists: (parent: Favourites, args, { dataSources }) => {
			return parent.artistsIds?.map((id) => dataSources.artistsService.findOne(id));
		},

		tracks: (parent: Favourites, args, { dataSources }) => {
			return parent.tracksIds?.map((id) => dataSources.tracksService.findOne(id));
		},
	},
};
