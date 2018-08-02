import React from 'react'

import Paper from '@material-ui/core/Paper';
import { Switch, Route } from 'react-router-dom'
import shortid from 'shortid'
import { withStyles } from '@material-ui/core/styles';
import FoodNavComponent from "./FoodNavComponent";

import bgImg from '../../common/assets/img/burgher.jpg'

import foodBG from '../../common/assets/img/menu_background.jpg'
import PageHeaderContainer from '../common/page/PageHeaderContainer'
import FoodMenuComponent from './FoodMenuComponent';
import theme from '../../common/styled/theme'


// ! Currently usine a Query in HomeContainer local state as a variable here.  Eventually will move to @export to contain queries.
// See here https://github.com/apollographql/apollo-link-state/issues/168

const FoodContainer = (props) => {
  const { classes } = props;
  const navItems = [
    { id: 0, label: "Brunch", link: "/Food/Brunch", slug: "brunch" },
    { id: 1, label: "Starters", link: "/Food/Starters", slug: "starters" },
    { id: 2, label: "Greens", link: "/Food/Greens", slug: "greens" },
    {
      id: 3,
      label: "Handhelds",
      link: "/Food/Handhelds",
      slug: "handhelds"
    },
    { id: 4, label: "Burghers", link: "/Food/Burghers", slug: "burghers" },
    {
      id: 5,
      label: "Sustenance",
      link: "/Food/Sustenance",
      slug: "sustenance"
    }
  ];
  return (

    <div >
          <PageHeaderContainer heading="Food" bgImg={bgImg} review={true} />
          <FoodNavComponent
          navItems={navItems}
          />
          <Paper elevation={2} classes={{root: classes.paperRoot}}>
          <Switch>
          <Route
            exact
            path="/Food"
            render={() => <FoodMenuComponent selectedFoodType="brunch" />}
          />
            {navItems.map(navItem => (
              <Route key={shortid.generate()} exact path={navItem.link} render={() => <FoodMenuComponent selectedFoodType={navItem.slug} /> } />
            ))}


          </Switch>
          </Paper>

        </div>

  )

}
export default withStyles(theme.materialUI)(FoodContainer)
