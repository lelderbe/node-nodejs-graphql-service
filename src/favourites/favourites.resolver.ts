export const favouritesResolver = {
	Query: {
		getAll: (parent, args, { dataSources }) => {
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
		id: (parent) => {
			return parent._id;
		},

		bands: (parent, args, { dataSources }) => {
			return parent.bandsIds.map((id) => dataSources.bandsService.band(id));
		},

		genres: (parent, args, { dataSources }) => {
			return parent.genresIds.map((id) => dataSources.genresService.genre(id));
		},

		artists: (parent, args, { dataSources }) => {
			return parent.artistsIds.map((id) => dataSources.artistsService.artist(id));
		},

		tracks: (parent, args, { dataSources }) => {
			return parent.tracksIds.map((id) => dataSources.tracksService.track(id));
		},
	},
};
