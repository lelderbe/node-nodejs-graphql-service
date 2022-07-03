export const usersResolver = {
	Query: {
		user: (parent, { id }, { dataSources }) => {
			return dataSources.usersAPI.findOne(id);
		},

		jwt: (parent, { email, password }, { dataSources }) => {
			return dataSources.usersAPI.login(email, password);
		},
	},

	Mutation: {
		register: (parent, { input }, { dataSources }) => {
			return dataSources.usersAPI.register(input);
		},
	},

	User: {
		id: (parent) => {
			return parent._id;
		},
	},
};
