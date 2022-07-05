export const artistsResolver = {
	Query: {
		artist: (parent, { id }, { dataSources }) => {
			return dataSources.artistsService.artist(id);
		},

		artists: (parent, { offset, limit }, { dataSources }) => {
			return dataSources.artistsService.artists(offset, limit);
		},
	},

	Mutation: {
		createArtist: (parent, { input }, { dataSources }) => {
			return dataSources.artistsService.createArtist(input);
		},

		updateArtist: (parent, { id, input }, { dataSources }) => {
			return dataSources.artistsService.updateArtist(id, input);
		},

		deleteArtist: (parent, { id }, { dataSources }) => {
			return dataSources.artistsService.deleteArtist(id);
		},
	},

	Artist: {
		id: (parent) => {
			return parent._id;
		},

		bands: (parent, args, { dataSources }) => {
			return parent.bandsIds.map((id) => dataSources.bandsService.band(id));
		},
	},
};
