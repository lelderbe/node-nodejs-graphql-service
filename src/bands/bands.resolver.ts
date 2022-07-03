export const bandsResolver = {
	Query: {
		band: (parent, { id }, { dataSources }) => {
			return dataSources.bandsAPI.findOne(id);
		},

		bands: async (parent, { offset, limit }, { dataSources }) => {
			return dataSources.bandsAPI.find(offset, limit);
		},
	},

	Mutation: {
		createBand: (parent, { input }, { dataSources }) => {
			return dataSources.bandsAPI.create(input);
		},

		updateBand: (parent, { id, input }, { dataSources }) => {
			return dataSources.bandsAPI.update(id, input);
		},

		deleteBand: (parent, { id }, { dataSources }) => {
			return dataSources.bandsAPI.delete(id);
		},
	},

	Band: {
		id: (parent) => {
			return parent._id;
		},
	},
};
