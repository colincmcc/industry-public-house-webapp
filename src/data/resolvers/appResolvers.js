import gql from 'graphql-tag'

const appResolvers =  {
  defaults: {
    networkStatus: {
      __typename: 'NetworkStatus',
      isConnected: true,
    },
    isLoggedIn: false,
  },
  resolvers: {
    Mutation: {
      updateNetworkStatus: (_, { isConnected }, { cache }) => {
        const data = {
          networkStatus: {
            __typename: 'NetworkStatus',
            isConnected
          },
        };
        cache.writeData({ data });
        return null;
      }
    }
  }
}

export default appResolvers