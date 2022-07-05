import 'dotenv/config';
import { ApolloServer } from 'apollo-server';
import { genresTypeDefs } from './genres/genres.schema';
import { genresResolver } from './genres/genres.resolver';
import { GenresService } from './genres/genres.service';
import { artistsTypeDefs } from './artists/artists.schema';
import { artistsResolver } from './artists/artists.resolver';
import { ArtistsService } from './artists/artists.service';
import { usersTypeDefs } from './users/users.schema';
import { usersResolver } from './users/users.resolver';
import { UsersService } from './users/users.service';
import { bandsTypeDefs } from './bands/bands.schema';
import { bandsResolver } from './bands/bands.resolver';
import { BandsService } from './bands/bands.service';
import { tracksTypeDefs } from './tracks/tracks.schema';
import { tracksResolver } from './tracks/tracks.resolver';
import { TracksService } from './tracks/tracks.service';
import { albumsTypeDefs } from './albums/albums.schema';
import { albumsResolver } from './albums/albums.resolver';
import { AlbumsService } from './albums/albums.service';

const server = new ApolloServer({
	typeDefs: [
		genresTypeDefs,
		artistsTypeDefs,
		usersTypeDefs,
		bandsTypeDefs,
		tracksTypeDefs,
		albumsTypeDefs,
	],
	resolvers: [
		genresResolver,
		artistsResolver,
		usersResolver,
		bandsResolver,
		tracksResolver,
		albumsResolver,
	],
	dataSources: () => {
		return {
			genresService: new GenresService(),
			artistsService: new ArtistsService(),
			usersService: new UsersService(),
			bandsService: new BandsService(),
			tracksService: new TracksService(),
			albumsService: new AlbumsService(),
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
