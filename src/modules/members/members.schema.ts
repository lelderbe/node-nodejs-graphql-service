import { gql } from 'apollo-server';

export const membersTypeDefs = gql`
	input CreateMemberInput {
		id: ID!
		instrument: String
		years: [String]
	}

	type Member {
		id: ID!
		firstName: String!
		secondName: String!
		middleName: String
		birthDate: String
		birthPlace: String
		country: String
		bands: [Band]
		instruments: [String]
		instrument: String
		years: [String]
	}
`;
