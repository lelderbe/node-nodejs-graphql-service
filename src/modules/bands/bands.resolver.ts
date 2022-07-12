import { Band } from './band.interface';

export const bandsResolver = {
	Query: {
		band: (parent, { id }, { dataSources }) => {
			return dataSources.bandsService.findOne(id);
		},

		bands: async (parent, args, { dataSources }) => {
			return dataSources.bandsService.findAll(args);
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

		members: async (parent: Band, args, { dataSources }) => {
			const { members } = parent;
			return (
				await Promise.all(
					members.map((member) => {
						return dataSources.artistsService.findOne(member.id);
					}),
				)
			)
				.filter(Boolean)
				.map((artist, index) => {
					return {
						...artist,
						instrument: members[index].instrument,
						years: members[index].years,
					};
				});
		},

		genres: (parent: Band, args, { dataSources }) => {
			return parent.genresIds.map((id) => dataSources.genresService.findOne(id));
		},
	},
};
