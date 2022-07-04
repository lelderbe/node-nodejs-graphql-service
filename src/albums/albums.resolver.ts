export const albumsResolver = {
	Query: {
		album: (parent, { id }, { dataSources }) => {
			return dataSources.albumsAPI.album(id);
		},

		albums: async (parent, { offset, limit }, { dataSources }) => {
			return dataSources.albumsAPI.albums(offset, limit);
		},
	},

	Mutation: {
		createAlbum: (parent, { input }, { dataSources }) => {
			return dataSources.albumsAPI.createAlbum(input);
		},

		updateAlbum: (parent, { id, input }, { dataSources }) => {
			return dataSources.albumsAPI.updateAlbum(id, input);
		},

		deleteAlbum: (parent, { id }, { dataSources }) => {
			return dataSources.albumsAPI.deleteAlbum(id);
		},
	},

	Album: {
		id: (parent) => {
			return parent._id;
		},

		artists: (parent, args, { dataSources }) => {
			return parent.artistsIds.map((id) => dataSources.artistsAPI.artist(id));
		},

		bands: (parent, args, { dataSources }) => {
			return parent.bandsIds.map((id) => dataSources.bandsAPI.band(id));
		},

		tracks: (parent, args, { dataSources }) => {
			return parent.trackIds.map((id) => dataSources.tracksAPI.track(id));
		},

		genres: (parent, args, { dataSources }) => {
			return parent.genresIds.map((id) => dataSources.genresAPI.genre(id));
		},
	},
};
