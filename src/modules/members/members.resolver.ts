import { Artist } from '../artists/artist.interface';

export const membersResolver = {
	Member: {
		id: (parent) => {
			return parent._id;
		},

		bands: (parent: Artist, args, { dataSources }) => {
			return parent.bandsIds.map((id) => dataSources.bandsService.findOne(id));
		},
	},
};
