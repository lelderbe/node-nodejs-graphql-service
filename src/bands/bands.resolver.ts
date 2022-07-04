export const bandsResolver = {
	Query: {
		band: (parent, { id }, { dataSources }) => {
			return dataSources.bandsAPI.band(id);
		},

		bands: async (parent, { offset, limit }, { dataSources }) => {
			return dataSources.bandsAPI.bands(offset, limit);
		},
	},

	Mutation: {
		createBand: (parent, { input }, { dataSources }) => {
			return dataSources.bandsAPI.createBand(input);
		},

		updateBand: (parent, { id, input }, { dataSources }) => {
			return dataSources.bandsAPI.updateBand(id, input);
		},

		deleteBand: (parent, { id }, { dataSources }) => {
			return dataSources.bandsAPI.deleteBand(id);
		},
	},

	Band: {
		id: (parent) => {
			return parent._id;
		},

		members: (parent, args, { dataSources }) => {
			// const result = parent.members.map((id) => dataSources.artistsAPI.artist(id));
			// return result;
		},

		genres: (parent, args, { dataSources }) => {
			return parent.genresIds.map((id) => dataSources.genresAPI.genre(id));
		},
	},
};
