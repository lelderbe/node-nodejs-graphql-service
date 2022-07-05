export const albumsResolver = {
	Query: {
		album: (parent, { id }, { dataSources }) => {
			return dataSources.albumsService.album(id);
		},

		albums: async (parent, { offset, limit }, { dataSources }) => {
			return dataSources.albumsService.albums(offset, limit);
		},
	},

	Mutation: {
		createAlbum: (parent, { input }, { dataSources }) => {
			return dataSources.albumsService.createAlbum(input);
		},

		updateAlbum: (parent, { id, input }, { dataSources }) => {
			return dataSources.albumsService.updateAlbum(id, input);
		},

		deleteAlbum: (parent, { id }, { dataSources }) => {
			return dataSources.albumsService.deleteAlbum(id);
		},
	},

	Album: {
		id: (parent) => {
			return parent._id;
		},

		artists: (parent, args, { dataSources }) => {
			return parent.artistsIds.map((id) => dataSources.artistsService.artist(id));
		},

		bands: (parent, args, { dataSources }) => {
			return parent.bandsIds.map((id) => dataSources.bandsService.band(id));
		},

		tracks: (parent, args, { dataSources }) => {
			return parent.trackIds.map((id) => dataSources.tracksService.track(id));
		},

		genres: (parent, args, { dataSources }) => {
			return parent.genresIds.map((id) => dataSources.genresService.genre(id));
		},
	},
};
