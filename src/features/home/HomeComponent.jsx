import React from "react";
import styled from "styled-components";
import { withStyles } from "@material-ui/core/styles";
import AboutContainer from "./components/about/AboutContainer";
import PageHeaderContainer from "../../common/components/page/PageHeaderContainer";
import EventContainer from "../events/EventContainer";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import theme from "../../common/styled/theme";

const HomeComponent = props => {
  const { allHeaders, classes } = props;

  function chooseHeader() {
    if (allHeaders.some(h => h.acf.isFeatured === true)) {
      return allHeaders.find(h => h.acf.isFeatured === true);
    }
    const randomHeader =
      allHeaders.length > 1
        ? allHeaders[Math.floor(Math.random() * allHeaders.length)]
        : allHeaders;

    return randomHeader;
  }
  const choosenHeader = chooseHeader();
  let isCustomLink = choosenHeader.acf.headerLink === "custom";
  const subHeading = (
    <HomeSubHeading>
      <Description>{choosenHeader.acf.subHeading}</Description>

      {isCustomLink ? (
        <Button
          classes={{ root: classes.buttonRoot }}
          href={choosenHeader.acf.customLink}
        >
          {choosenHeader.acf.buttonText}
        </Button>
      ) : (
        <Button
          classes={{ root: classes.buttonRoot }}
          component={Link}
          to={choosenHeader.acf.headerLink}
        >
          {choosenHeader.acf.buttonText}
        </Button>
      )}
    </HomeSubHeading>
  );

  const header = {
    bgImg: choosenHeader.acf.background_image,
    heading: choosenHeader.title.rendered,
    subHeading: subHeading
  };
  return (
    <HomeWrapper>
      <PageHeaderContainer {...header} />
      <AboutContainer />
      <EventContainer />
    </HomeWrapper>
  );
};

export default withStyles(theme.materialUI)(HomeComponent);

const HomeWrapper = styled.div``;

const HomeSubHeading = styled.div``;
const Description = styled.p`
  font-style: italic;
`;
