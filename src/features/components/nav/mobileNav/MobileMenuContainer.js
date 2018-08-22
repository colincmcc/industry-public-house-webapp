import React from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import LoadingComponent from '../../loading/LoadingComponent';
import ErrorComponent from '../../loading/ErrorComponent';
import MobileMenuComponent from './MobileMenuComponent';
import fullLogo from '../../../../common/assets/img/Industry_fullLogo_sm_wht.svg';

const WP_HOME = gql`
  {
    pageBy(slug: "home") {
      acf {
        hero_image
      }
    }
    mobileMenuOpen @client
  }
`;
const MobileMenuContainer = () => (
  <Query query={WP_HOME}>
    {
      ({
        data, loading, error, client,
      }) => {
        if (loading) return <LoadingComponent />;
        if (error) return <ErrorComponent />;

        // ! pageBy query returns an array, despite having only 1 valid value.
        const headerLogo = data.pageBy[0].acf.hero_image || fullLogo;

        return (
          <MobileMenuComponent
            client={client}
            logo={headerLogo}
            isOpen={data.mobileMenuOpen}
          />
        );
      }
    }
  </Query>
);

export default MobileMenuContainer;
