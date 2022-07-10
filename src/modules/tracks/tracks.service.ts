import { RESTDataSource, RequestOptions } from 'apollo-datasource-rest';
import { LIMIT, OFFSET } from '../../common/constants';

export class TracksService extends RESTDataSource {
	baseURL = process.env.TRACKS_URL;

	willSendRequest(request: RequestOptions) {
		request.headers.set('Authorization', this.context.token);
	}

	async createTrack(input) {
		const track = await this.post(``, input);
		return track ? track : null;
	}

	findAll({ offset = OFFSET, limit = LIMIT, filter }) {
		return this.get(``, {
			offset,
			limit,
			...filter,
		});
	}

	async findOne(id: string) {
		const track = await this.get(`/${encodeURIComponent(id)}`);
		return track ? track : null;
	}

	async updateTrack(id: string, input) {
		const track = await this.put(`/${encodeURIComponent(id)}`, input);
		return track ? track : null;
	}

	deleteTrack(id: string) {
		return this.delete(`/${encodeURIComponent(id)}`);
	}
}
