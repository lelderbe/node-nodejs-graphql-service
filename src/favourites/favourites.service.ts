import { RESTDataSource, RequestOptions } from 'apollo-datasource-rest';

export class FavouritesService extends RESTDataSource {
	baseURL = process.env.FAVOURITES_URL;

	willSendRequest(request: RequestOptions) {
		request.headers.set('Authorization', this.context.token);
	}

	addToFavourites(input) {
		return this.put(`/add`, input);
	}

	getAll() {
		return this.get(``);
	}
}
