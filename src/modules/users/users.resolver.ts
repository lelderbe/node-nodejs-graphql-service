export const usersResolver = {
	Query: {
		user: (parent, { id }, { dataSources }) => {
			return dataSources.usersService.findOne(id);
		},

		jwt: (parent, { email, password }, { dataSources }) => {
			return dataSources.usersService.login(email, password);
		},
	},

	Mutation: {
		register: (parent, { input }, { dataSources }) => {
			return dataSources.usersService.register(input);
		},
	},

	User: {
		id: (parent) => {
			return parent._id;
		},
	},
};
