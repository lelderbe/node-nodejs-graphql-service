import { Band } from './band.interface';

export const bandsResolver = {
	Query: {
		band: (parent, { id }, { dataSources }) => {
			return dataSources.bandsService.findOne(id);
		},

		bands: async (parent, { offset, limit }, { dataSources }) => {
			return dataSources.bandsService.findAll(offset, limit);
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
		id: (parent: Band) => {
			return parent._id;
		},

		members: (parent: Band, args, { dataSources }) => {
			return parent.members.map((id) => dataSources.artistsService.findOne(id));
		},

		genres: (parent: Band, args, { dataSources }) => {
			return parent.genresIds.map((id) => dataSources.genresService.findOne(id));
		},
	},
};
