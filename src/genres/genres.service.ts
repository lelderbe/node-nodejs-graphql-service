import { RESTDataSource } from 'apollo-datasource-rest';

export class GenreAPI extends RESTDataSource {
	constructor() {
		super();
		// console.log(process.env.GENRES_URL);
		this.baseURL = process.env.GENRES_URL;
	}

	genres() {
		return this.get('');
	}
}
