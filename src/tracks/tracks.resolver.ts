export const tracksResolver = {
	Query: {
		track: (parent, { id }, { dataSources }) => {
			return dataSources.tracksAPI.track(id);
		},

		tracks: async (parent, { offset, limit }, { dataSources }) => {
			return dataSources.tracksAPI.tracks(offset, limit);
		},
	},

	Mutation: {
		createTrack: (parent, { input }, { dataSources }) => {
			return dataSources.tracksAPI.createTrack(input);
		},

		updateTrack: (parent, { id, input }, { dataSources }) => {
			return dataSources.tracksAPI.updateTrack(id, input);
		},

		deleteTrack: (parent, { id }, { dataSources }) => {
			return dataSources.tracksAPI.deleteTrack(id);
		},
	},

	Track: {
		id: (parent) => {
			return parent._id;
		},

		albums: (parent, args, { dataSources }) => {
			return parent.albumId.map((id) => dataSources.albumsAPI.album(id));
		},

		bands: (parent, args, { dataSources }) => {
			return parent.bandsIds.map((id) => dataSources.bandsAPI.band(id));
		},

		genres: (parent, args, { dataSources }) => {
			return parent.genresIds.map((id) => dataSources.genresAPI.genre(id));
		},
	},
};
