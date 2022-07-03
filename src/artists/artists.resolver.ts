export const artistsResolver = {
	Query: {
		// returns an array of Artists
		artists: (_, __, { dataSources }) => {
			// console.log('artists');
			return dataSources.artistsAPI.artists();
		},
	},
	// Genre: {
	// 	author: ({ authorId }, _, { dataSources }) => {
	// 		console.log('author');
	// 		return dataSources.trackAPI.getAuthor(authorId);
	// 	},
	// },
};
