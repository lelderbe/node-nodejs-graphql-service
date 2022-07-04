import { RESTDataSource, RequestOptions } from 'apollo-datasource-rest';
import { LIMIT, OFFSET } from '../app/constants';

export class BandsAPI extends RESTDataSource {
	baseURL = process.env.BANDS_URL;

	willSendRequest(request: RequestOptions) {
		request.headers.set('Authorization', this.context.token);
	}

	createBand(input) {
		return this.post(``, input);
	}

	bands(offset = OFFSET, limit = LIMIT) {
		return this.get(``, {
			offset,
			limit,
		});
	}

	band(id: string) {
		return this.get(`/${encodeURIComponent(id)}`);
	}

	updateBand(id: string, input) {
		return this.put(`/${encodeURIComponent(id)}`, input);
	}

	deleteBand(id: string) {
		return this.delete(`/${encodeURIComponent(id)}`);
	}
}
