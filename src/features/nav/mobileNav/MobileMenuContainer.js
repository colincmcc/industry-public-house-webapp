import React from 'react'
import { Query } from "react-apollo";
import gql from "graphql-tag";
import MobileMenuComponent from './MobileMenuComponent';
import fullLogo from "../../../common/assets/img/Industry_fullLogo_sm_wht.svg";

const MobileMenuContainer = () => {

  return (
    <Query query={WP_HOME}>
    {
      ({data, loading, error}) => {
        if(loading) return <div> Loading ...</div>
        if(error) return <div> Error...</div>

        // ! pageBy query returns an array, despite having only 1 valid value.
        const headerLogo = data.pageBy[0].acf.hero_image || fullLogo
        return <MobileMenuComponent logo={headerLogo}  />
      }
    }
    </Query>
  )

}

export default MobileMenuContainer

const WP_HOME = gql`
{
  pageBy(slug: "home"){
    acf{
      hero_image
    }
  }
}
`