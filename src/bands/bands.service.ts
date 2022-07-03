import { RESTDataSource, RequestOptions } from 'apollo-datasource-rest';
import { LIMIT, OFFSET } from '../app/constants';

export class BandsAPI extends RESTDataSource {
	baseURL = process.env.BANDS_URL;

	willSendRequest(request: RequestOptions) {
		request.headers.set('Authorization', this.context.token);
	}

	create(input) {
		return this.post(``, input);
	}

	find(offset = OFFSET, limit = LIMIT) {
		return this.get(``, {
			offset,
			limit,
		});
	}

	findOne(id: string) {
		return this.get(`/${encodeURIComponent(id)}`);
	}

	update(id: string, input) {
		return this.put(`/${encodeURIComponent(id)}`, input);
	}

	delete(id: string) {
		return this.delete(`/${encodeURIComponent(id)}`);
	}
}
