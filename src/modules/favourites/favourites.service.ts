import { RESTDataSource, RequestOptions } from 'apollo-datasource-rest';
import { Favourites } from './favourites.interface';

export class FavouritesService extends RESTDataSource {
	baseURL = process.env.FAVOURITES_URL;

	willSendRequest(request: RequestOptions) {
		request.headers.set('Authorization', this.context.token);
	}

	addToFavourites(input) {
		return this.put<Favourites>(`/add`, input);
	}

	async getAll() {
		const favourites = await this.get<Favourites>(``);
		return favourites ? favourites : null;
	}
}
