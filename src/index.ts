import 'dotenv/config';
import { ApolloServer } from 'apollo-server';
import { genresTypeDefs } from './genres/genres.schema';
import { genresResolver } from './genres/genres.resolver';
import { GenreAPI } from './genres/genres.service';

const server = new ApolloServer({
	typeDefs: () => {
		return {
			...genresTypeDefs,
		};
	},
	resolvers: [genresResolver],
	dataSources: () => {
		return {
			genresAPI: new GenreAPI(),
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
