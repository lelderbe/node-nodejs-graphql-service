import 'dotenv/config';
import { ApolloServer } from 'apollo-server';
import { genresTypeDefs } from './genres/genres.schema';
import { genresResolver } from './genres/genres.resolver';
import { GenreAPI } from './genres/genres.service';
import { artistsTypeDefs } from './artists/artists.schema';
import { artistsResolver } from './artists/artists.resolver';
import { ArtistAPI } from './artists/artists.service';
import { usersTypeDefs } from './users/users.schema';
import { usersResolver } from './users/users.resolver';
import { UsersAPI } from './users/users.service';
import { bandsTypeDefs } from './bands/bands.schema';
import { bandsResolver } from './bands/bands.resolver';
import { BandsAPI } from './bands/bands.service';

const server = new ApolloServer({
	typeDefs: [genresTypeDefs, artistsTypeDefs, usersTypeDefs, bandsTypeDefs],
	resolvers: [genresResolver, artistsResolver, usersResolver, bandsResolver],
	dataSources: () => {
		return {
			genresAPI: new GenreAPI(),
			artistsAPI: new ArtistAPI(),
			usersAPI: new UsersAPI(),
			bandsAPI: new BandsAPI(),
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
		📭  Query at http://localhost:4000/
    `);
});
