export const genresResolver = {
	Query: {
		genre: (parent, { id }, { dataSources }) => {
			return dataSources.genresService.genre(id);
		},

		genres: async (parent, { offset, limit }, { dataSources }) => {
			return dataSources.genresService.genres(offset, limit);
		},
	},

	Mutation: {
		createGenre: (parent, { input }, { dataSources }) => {
			return dataSources.genresService.createGenre(input);
		},

		updateGenre: (parent, { id, input }, { dataSources }) => {
			return dataSources.genresService.updateGenre(id, input);
		},

		deleteGenre: (parent, { id }, { dataSources }) => {
			return dataSources.genresService.deleteGenre(id);
		},
	},

	Genre: {
		id: (parent) => {
			return parent._id;
		},
	},
};
