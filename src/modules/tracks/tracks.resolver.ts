import { Track } from './track.interface';

export const tracksResolver = {
	Query: {
		track: (parent, { id }, { dataSources }) => {
			return dataSources.tracksService.findOne(id);
		},

		tracks: async (parent, { offset, limit }, { dataSources }) => {
			return dataSources.tracksService.findAll(offset, limit);
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
		id: (parent: Track) => {
			return parent._id;
		},

		albums: (parent: Track, args, { dataSources }) => {
			return dataSources.albumsService.findOne(parent.albumId);
		},

		bands: (parent: Track, args, { dataSources }) => {
			return parent.bandsIds.map((id) => dataSources.bandsService.findOne(id));
		},

		genres: (parent: Track, args, { dataSources }) => {
			return parent.genresIds.map((id) => dataSources.genresService.findOne(id));
		},
	},
};
