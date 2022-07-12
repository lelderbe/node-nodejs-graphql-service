import { RESTDataSource, RequestOptions } from 'apollo-datasource-rest';
import { LIMIT, OFFSET } from '../../common/constants';

export class ArtistsService extends RESTDataSource {
	baseURL = process.env.ARTISTS_URL;

	willSendRequest(request: RequestOptions) {
		request.headers.set('Authorization', this.context.token);
	}

	async createArtist(input) {
		const artist = await this.post(``, input);
		return artist ? artist : null;
	}

	findAll({ offset = OFFSET, limit = LIMIT, filter }) {
		return this.get(``, {
			offset,
			limit,
			...filter,
		});
	}

	async findOne(id: string) {
		const artist = await this.get(`/${encodeURIComponent(id)}`);
		return artist ? artist : null;
	}

	async updateArtist(id: string, input) {
		const artist = await this.put(`/${encodeURIComponent(id)}`, input);
		return artist ? artist : null;
	}

	deleteArtist(id: string) {
		return this.delete(`/${encodeURIComponent(id)}`);
	}
}
