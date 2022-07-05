import { RESTDataSource, RequestOptions } from 'apollo-datasource-rest';
import { LIMIT, OFFSET } from '../../common/constants';

export class AlbumsService extends RESTDataSource {
	baseURL = process.env.ALBUMS_URL;

	willSendRequest(request: RequestOptions) {
		request.headers.set('Authorization', this.context.token);
	}

	async createAlbum(input) {
		const album = await this.post(``, input);
		return album ? album : null;
	}

	findAll(offset = OFFSET, limit = LIMIT) {
		return this.get(``, {
			offset,
			limit,
		});
	}

	async findOne(id: string) {
		const album = await this.get(`/${encodeURIComponent(id)}`);
		return album ? album : null;
	}

	async updateAlbum(id: string, input) {
		const album = await this.put(`/${encodeURIComponent(id)}`, input);
		return album ? album : null;
	}

	deleteAlbum(id: string) {
		return this.delete(`/${encodeURIComponent(id)}`);
	}
}
