import { gql } from 'apollo-server';

export const baseTypeDefs = gql`
	type DeleteResponse {
		acknowledged: Boolean!
		deletedCount: Int!
	}
`;
