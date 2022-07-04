import { RESTDataSource, RequestOptions } from 'apollo-datasource-rest';
import { LIMIT, OFFSET } from '../app/constants';

export class AlbumsAPI extends RESTDataSource {
	baseURL = process.env.ALBUMS_URL;

	willSendRequest(request: RequestOptions) {
		request.headers.set('Authorization', this.context.token);
	}

	createAlbum(input) {
		return this.post(``, input);
	}

	albums(offset = OFFSET, limit = LIMIT) {
		return this.get(``, {
			offset,
			limit,
		});
	}

	album(id: string) {
		return this.get(`/${encodeURIComponent(id)}`);
	}

	updateAlbum(id: string, input) {
		return this.put(`/${encodeURIComponent(id)}`, input);
	}

	deleteAlbum(id: string) {
		return this.delete(`/${encodeURIComponent(id)}`);
	}
}
