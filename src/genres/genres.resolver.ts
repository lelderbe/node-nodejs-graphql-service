export const genresResolver = {
	Query: {
		genre: (parent, { id }, { dataSources }) => {
			return dataSources.genresAPI.genre(id);
		},

		genres: async (parent, args, { dataSources }) => {
			return dataSources.genresAPI.genres(args.offset, args.limit);
		},
	},

	Mutation: {
		createGenre: (parent, { input }, { dataSources }) => {
			return dataSources.genresAPI.createGenre(input);
		},

		updateGenre: (parent, { id, input }, { dataSources }) => {
			return dataSources.genresAPI.updateGenre(id, input);
		},

		deleteGenre: (parent, { id }, { dataSources }) => {
			return dataSources.genresAPI.deleteGenre(id);
		},
	},

	Genre: {
		id: (parent) => {
			return parent._id;
		},
	},
};
