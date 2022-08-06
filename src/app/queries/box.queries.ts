import { gql } from 'apollo-angular';

const GET_BOXES = gql`
  query {
    rates(currency: "USD") {
      currency
      rate
    }
  }
`;

const GET_BOX = gql`
  query FindRate($currency: String!) {
    findRate(currency: $currency) {
      id
      name
      min_size
    }
  }
`;

export { GET_BOXES, GET_BOX };
