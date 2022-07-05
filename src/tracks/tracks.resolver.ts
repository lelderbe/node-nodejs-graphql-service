export const tracksResolver = {
	Query: {
		track: (parent, { id }, { dataSources }) => {
			return dataSources.tracksService.track(id);
		},

		tracks: async (parent, { offset, limit }, { dataSources }) => {
			return dataSources.tracksService.tracks(offset, limit);
		},
	},

	Mutation: {
		createTrack: (parent, { input }, { dataSources }) => {
			return dataSources.tracksService.createTrack(input);
		},

		updateTrack: (parent, { id, input }, { dataSources }) => {
			return dataSources.tracksService.updateTrack(id, input);
		},

		deleteTrack: (parent, { id }, { dataSources }) => {
			return dataSources.tracksService.deleteTrack(id);
		},
	},

	Track: {
		id: (parent) => {
			return parent._id;
		},

		albums: (parent, args, { dataSources }) => {
			return parent.albumId.map((id) => dataSources.albumsService.album(id));
		},

		bands: (parent, args, { dataSources }) => {
			return parent.bandsIds.map((id) => dataSources.bandsService.band(id));
		},

		genres: (parent, args, { dataSources }) => {
			return parent.genresIds.map((id) => dataSources.genresService.genre(id));
		},
	},
};
