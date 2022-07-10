import { Artist } from './artist.interface';

export const artistsResolver = {
	Query: {
		artist: (parent, { id }, { dataSources }) => {
			return dataSources.artistsService.findOne(id);
		},

		artists: (parent, args, { dataSources }) => {
			return dataSources.artistsService.findAll(args);
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
		id: (parent: Artist) => {
			return parent._id;
		},

		bands: (parent: Artist, args, { dataSources }) => {
			return parent.bandsIds.map((id) => dataSources.bandsService.findOne(id));
		},
	},
};
