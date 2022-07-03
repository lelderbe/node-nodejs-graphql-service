export const genresResolver = {
	Query: {
		// returns an array of Genres
		genres: (_, __, { dataSources }) => {
			// console.log('genres');
			return dataSources.genresAPI.genres();
		},
	},
	// Genre: {
	// 	author: ({ authorId }, _, { dataSources }) => {
	// 		console.log('author');
	// 		return dataSources.trackAPI.getAuthor(authorId);
	// 	},
	// },
};
