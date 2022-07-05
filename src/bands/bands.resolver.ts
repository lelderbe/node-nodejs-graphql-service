export const bandsResolver = {
	Query: {
		band: (parent, { id }, { dataSources }) => {
			return dataSources.bandsService.band(id);
		},

		bands: async (parent, { offset, limit }, { dataSources }) => {
			return dataSources.bandsService.bands(offset, limit);
		},
	},

	Mutation: {
		createBand: (parent, { input }, { dataSources }) => {
			return dataSources.bandsService.createBand(input);
		},

		updateBand: (parent, { id, input }, { dataSources }) => {
			return dataSources.bandsService.updateBand(id, input);
		},

		deleteBand: (parent, { id }, { dataSources }) => {
			return dataSources.bandsService.deleteBand(id);
		},
	},

	Band: {
		id: (parent) => {
			return parent._id;
		},

		members: (parent, args, { dataSources }) => {
			return parent.members.map((id) => dataSources.artistsService.artist(id));
		},

		genres: (parent, args, { dataSources }) => {
			return parent.genresIds.map((id) => dataSources.genresService.genre(id));
		},
	},
};
