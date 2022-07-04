export const artistsResolver = {
	Query: {
		artist: (parent, { id }, { dataSources }) => {
			return dataSources.artistsAPI.artist(id);
		},

		artists: (parent, { offset, limit }, { dataSources }) => {
			return dataSources.artistsAPI.artists(offset, limit);
		},
	},

	Mutation: {
		createArtist: (parent, { input }, { dataSources }) => {
			return dataSources.artistsAPI.createArtist(input);
		},

		updateArtist: (parent, { id, input }, { dataSources }) => {
			return dataSources.artistsAPI.updateArtist(id, input);
		},

		deleteArtist: (parent, { id }, { dataSources }) => {
			return dataSources.artistsAPI.deleteArtist(id);
		},
	},

	Artist: {
		id: (parent) => {
			return parent._id;
		},

		bands: (parent, args, { dataSources }) => {
			return parent.bandsIds.map((id) => dataSources.bandsAPI.band(id));
		},
	},
};
