import { RESTDataSource, RequestOptions } from 'apollo-datasource-rest';
import { LIMIT, OFFSET } from '../app/constants';

export class TracksService extends RESTDataSource {
	baseURL = process.env.TRACKS_URL;

	willSendRequest(request: RequestOptions) {
		request.headers.set('Authorization', this.context.token);
	}

	createTrack(input) {
		return this.post(``, input);
	}

	tracks(offset = OFFSET, limit = LIMIT) {
		return this.get(``, {
			offset,
			limit,
		});
	}

	track(id: string) {
		return this.get(`/${encodeURIComponent(id)}`);
	}

	updateTrack(id: string, input) {
		return this.put(`/${encodeURIComponent(id)}`, input);
	}

	deleteTrack(id: string) {
		return this.delete(`/${encodeURIComponent(id)}`);
	}
}
