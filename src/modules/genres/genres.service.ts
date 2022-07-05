import { RESTDataSource, RequestOptions } from 'apollo-datasource-rest';
import { LIMIT, OFFSET } from '../../common/constants';
import { CreateGenreInput } from './dto/create-genre.input';
import { UpdateGenreInput } from './dto/update-genre.input';

export class GenresService extends RESTDataSource {
	baseURL = process.env.GENRES_URL;

	willSendRequest(request: RequestOptions) {
		request.headers.set('Authorization', this.context.token);
	}

	async createGenre(input: CreateGenreInput) {
		const genre = await this.post(``, input);
		return genre ? genre : null;
	}

	findAll(offset = OFFSET, limit = LIMIT) {
		return this.get(``, {
			offset,
			limit,
		});
	}

	async findOne(id: string) {
		const genre = await this.get(`/${encodeURIComponent(id)}`);
		return genre ? genre : null;
	}

	async updateGenre(id: string, input: UpdateGenreInput) {
		const genre = await this.put(`/${encodeURIComponent(id)}`, input);
		return genre ? genre : null;
	}

	deleteGenre(id: string) {
		return this.delete(`/${encodeURIComponent(id)}`);
	}
}
