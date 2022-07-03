import { RESTDataSource, RequestOptions } from 'apollo-datasource-rest';

export class UsersAPI extends RESTDataSource {
	baseURL = process.env.USERS_URL;

	willSendRequest(request: RequestOptions) {
		request.headers.set('Authorization', this.context.token);
	}

	register(input) {
		return this.post(`/register`, input);
	}

	findOne(id: string) {
		return this.get(`/${encodeURIComponent(id)}`);
	}

	login(email: string, password: string) {
		return this.post(`/login`, {
			email,
			password,
		});
	}
}
