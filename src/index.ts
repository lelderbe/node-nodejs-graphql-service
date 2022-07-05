import 'dotenv/config';
import { ApolloServer } from 'apollo-server';
import { baseTypeDefs } from './common/base.schema';
import { genresTypeDefs } from './modules/genres/genres.schema';
import { genresResolver } from './modules/genres/genres.resolver';
import { GenresService } from './modules/genres/genres.service';
import { artistsTypeDefs } from './modules/artists/artists.schema';
import { artistsResolver } from './modules/artists/artists.resolver';
import { ArtistsService } from './modules/artists/artists.service';
import { usersTypeDefs } from './modules/users/users.schema';
import { usersResolver } from './modules/users/users.resolver';
import { UsersService } from './modules/users/users.service';
import { bandsTypeDefs } from './modules/bands/bands.schema';
import { bandsResolver } from './modules/bands/bands.resolver';
import { BandsService } from './modules/bands/bands.service';
import { tracksTypeDefs } from './modules/tracks/tracks.schema';
import { tracksResolver } from './modules/tracks/tracks.resolver';
import { TracksService } from './modules/tracks/tracks.service';
import { albumsTypeDefs } from './modules/albums/albums.schema';
import { albumsResolver } from './modules/albums/albums.resolver';
import { AlbumsService } from './modules/albums/albums.service';
import { favouritesTypeDefs } from './modules/favourites/favourites.schema';
import { favouritesResolver } from './modules/favourites/favourites.resolver';
import { FavouritesService } from './modules/favourites/favourites.service';
import { membersTypeDefs } from './modules/members/members.schema';
import { membersResolver } from './modules/members/members.resolver';

const PORT = process.env.PORT || 4000;

const server = new ApolloServer({
	typeDefs: [
		baseTypeDefs,
		genresTypeDefs,
		artistsTypeDefs,
		usersTypeDefs,
		bandsTypeDefs,
		tracksTypeDefs,
		albumsTypeDefs,
		favouritesTypeDefs,
		membersTypeDefs,
	],
	resolvers: [
		genresResolver,
		artistsResolver,
		usersResolver,
		bandsResolver,
		tracksResolver,
		albumsResolver,
		favouritesResolver,
		membersResolver,
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
