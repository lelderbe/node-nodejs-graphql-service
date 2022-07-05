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
import { favouritesTypeDefs } from './favourites/favourites.schema';
import { favouritesResolver } from './favourites/favourites.resolver';
import { FavouritesService } from './favourites/favourites.service';

const PORT = process.env.PORT || 4000;

const server = new ApolloServer({
	typeDefs: [
		genresTypeDefs,
		artistsTypeDefs,
		usersTypeDefs,
		bandsTypeDefs,
		tracksTypeDefs,
		albumsTypeDefs,
		favouritesTypeDefs,
	],
	resolvers: [
		genresResolver,
		artistsResolver,
		usersResolver,
		bandsResolver,
		tracksResolver,
		albumsResolver,
		favouritesResolver,
	],
	dataSources: () => {
		return {
			genresService: new GenresService(),
			artistsService: new ArtistsService(),
			usersService: new UsersService(),
			bandsService: new BandsService(),
			tracksService: new TracksService(),
			albumsService: new AlbumsService(),
			favouritesService: new FavouritesService(),
		};
	},
	context: ({ req }) => ({
		token: req.headers.authorization,
	}),
});

server.listen(PORT).then(() => {
	console.log(`
		🚀  Server is running!
		🔉  Listening on port ${PORT}
		📭  Query at http://localhost:${PORT}/
    `);
});
