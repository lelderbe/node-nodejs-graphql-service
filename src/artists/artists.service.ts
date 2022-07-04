import { RESTDataSource, RequestOptions } from 'apollo-datasource-rest';
import { LIMIT, OFFSET } from '../app/constants';

export class ArtistAPI extends RESTDataSource {
	baseURL = process.env.ARTISTS_URL;

	willSendRequest(request: RequestOptions) {
		request.headers.set('Authorization', this.context.token);
	}

	createArtist(input) {
		return this.post(``, input);
	}

	artists(offset = OFFSET, limit = LIMIT) {
		return this.get(``, {
			offset,
			limit,
		});
	}

	artist(id: string) {
		return this.get(`/${encodeURIComponent(id)}`);
	}

	updateArtist(id: string, input) {
		return this.put(`/${encodeURIComponent(id)}`, input);
	}

	deleteArtist(id: string) {
		return this.delete(`/${encodeURIComponent(id)}`);
	}
}
