import 'dotenv/config';
import { ApolloServer } from 'apollo-server';
import { genresTypeDefs } from './genres/genres.schema';
import { artistsTypeDefs } from './artists/artists.schema';
import { usersTypeDefs } from './users/users.schema';
import { genresResolver } from './genres/genres.resolver';
import { artistsResolver } from './artists/artists.resolver';
import { usersResolver } from './users/users.resolver';
import { GenreAPI } from './genres/genres.service';
import { ArtistAPI } from './artists/artists.service';
import { UsersAPI } from './users/users.service';

const server = new ApolloServer({
	typeDefs: [genresTypeDefs, artistsTypeDefs, usersTypeDefs],
	resolvers: [genresResolver, artistsResolver, usersResolver],
	dataSources: () => {
		return {
			genresAPI: new GenreAPI(),
			artistsAPI: new ArtistAPI(),
			usersAPI: new UsersAPI(),
		};
	},
	context: ({ req }) => ({
		token: req.headers.authorization,
	}),
});

server.listen().then(() => {
	console.log(`
		🚀  Server is running!
		🔉  Listening on port 4000
		📭  Query at https://studio.apollographql.com/dev
    `);
});
