import { Album } from './album.interface';

export const albumsResolver = {
	Query: {
		album: (parent, { id }, { dataSources }) => {
			return dataSources.albumsService.findOne(id);
		},

		albums: async (parent, args, { dataSources }) => {
			return dataSources.albumsService.findAll(args);
		},
	},

	Mutation: {
		createAlbum: (parent, { input }, { dataSources }) => {
			return dataSources.albumsService.createAlbum(input);
		},

		updateAlbum: (parent, { id, input }, { dataSources }) => {
			return dataSources.albumsService.updateAlbum(id, input);
		},

		deleteAlbum: (parent, { id }, { dataSources }) => {
			return dataSources.albumsService.deleteAlbum(id);
		},
	},

	Album: {
		id: (parent: Album) => {
			return parent._id;
		},

		artists: (parent: Album, args, { dataSources }) => {
			return parent.artistsIds.map((id) => dataSources.artistsService.findOne(id));
		},

		bands: (parent: Album, args, { dataSources }) => {
			return parent.bandsIds.map((id) => dataSources.bandsService.findOne(id));
		},

		tracks: (parent: Album, args, { dataSources }) => {
			return parent.trackIds.map((id) => dataSources.tracksService.findOne(id));
		},

		genres: (parent: Album, args, { dataSources }) => {
			return parent.genresIds.map((id) => dataSources.genresService.findOne(id));
		},
	},
};
