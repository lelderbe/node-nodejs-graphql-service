import { RESTDataSource } from 'apollo-datasource-rest';

export class ArtistAPI extends RESTDataSource {
	constructor() {
		super();
		// console.log(process.env.GENRES_URL);
		this.baseURL = process.env.ARTISTS_URL;
	}

	artists() {
		return this.get('');
	}
}
