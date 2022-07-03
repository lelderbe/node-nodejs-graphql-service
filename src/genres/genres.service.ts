import { RESTDataSource, RequestOptions } from 'apollo-datasource-rest';
import { LIMIT, OFFSET } from '../app/constants';
import { CreateGenreInput } from './dto/create-genre.input';
import { UpdateGenreInput } from './dto/update-genre.input';

export class GenreAPI extends RESTDataSource {
	baseURL = process.env.GENRES_URL;

	willSendRequest(request: RequestOptions) {
		request.headers.set('Authorization', this.context.token);
		// request.params.set('offset', String(OFFSET));
		// request.params.set('limit', '2');
	}

	createGenre(input: CreateGenreInput) {
		return this.post(``, input);
	}

	genres(offset = OFFSET, limit = LIMIT) {
		return this.get(``, {
			offset,
			limit,
		});
	}

	genre(id: string) {
		return this.get(`/${encodeURIComponent(id)}`);
	}

	updateGenre(id: string, input: UpdateGenreInput) {
		return this.put(`/${encodeURIComponent(id)}`, input);
	}

	deleteGenre(id: string) {
		return this.delete(`/${encodeURIComponent(id)}`);
	}
}
