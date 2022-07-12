import { RESTDataSource, RequestOptions } from 'apollo-datasource-rest';
import { LIMIT, OFFSET } from '../../common/constants';

export class BandsService extends RESTDataSource {
	baseURL = process.env.BANDS_URL;

	willSendRequest(request: RequestOptions) {
		request.headers.set('Authorization', this.context.token);
	}

	async createBand(input) {
		const band = await this.post(``, input);
		return band ? band : null;
	}

	findAll({ offset = OFFSET, limit = LIMIT, filter }) {
		return this.get(``, {
			offset,
			limit,
			...filter,
		});
	}

	async findOne(id: string) {
		const band = await this.get(`/${encodeURIComponent(id)}`);
		return band ? band : null;
	}

	async updateBand(id: string, input) {
		const band = await this.put(`/${encodeURIComponent(id)}`, input);
		return band ? band : null;
	}

	deleteBand(id: string) {
		return this.delete(`/${encodeURIComponent(id)}`);
	}
}
