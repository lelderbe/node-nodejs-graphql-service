import 'dotenv/config';
import { ApolloServer } from 'apollo-server';
import { genresTypeDefs } from './genres/genres.schema';
import { artistsTypeDefs } from './artists/artists.schema';
import { genresResolver } from './genres/genres.resolver';
import { artistsResolver } from './artists/artists.resolver';
import { GenreAPI } from './genres/genres.service';
import { ArtistAPI } from './artists/artists.service';

const server = new ApolloServer({
	typeDefs: [genresTypeDefs, artistsTypeDefs],
	resolvers: [genresResolver, artistsResolver],
	dataSources: () => {
		return {
			genresAPI: new GenreAPI(),
			artistsAPI: new ArtistAPI(),
		};
	},
});

server.listen().then(() => {
	console.log(`
		🚀  Server is running!
		🔉  Listening on port 4000
		📭  Query at https://studio.apollographql.com/dev
    `);
});
