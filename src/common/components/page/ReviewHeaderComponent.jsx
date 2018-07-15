import React from "react";
import { withStyles } from "@material-ui/core/styles";
import styled from "styled-components";
import Button from "@material-ui/core/Button";
import theme from "../../styled/theme";
import { CSSTransition } from "react-transition-group";

const ReviewHeaderComponent = props => {
  const { classes } = props;

  return (
    <PageHeaderWrapper>
      <CSSTransition in={true} classNames="fade" appear={true} timeout={1000}>
        <BGOverlay bgImg={props.bgImg} />
      </CSSTransition>
      <PageHeadContent>
        <PageHeading>{props.heading} </PageHeading>

        <PageSubHeading>
          <Review>{`"${props.review.acf.review_snippet}"`}</Review>

          <Author>{`- ${props.review.acf.review_author}`}</Author>

          <Button
            onClick={() => window.open(props.review.acf.source_link, "_blank")}
            classes={{ root: classes.buttonRoot }}
          >
            Read Review
          </Button>
        </PageSubHeading>
      </PageHeadContent>
    </PageHeaderWrapper>
  );
};

export default withStyles(theme.materialUI)(ReviewHeaderComponent);

const PageHeaderWrapper = styled.section`
  display: flex;
  align-items: center;
  height: 100vh;
  width: 100%;
  overflow: hidden;
  z-index: -2;
`;
const BGOverlay = styled.div`
  width: 100%;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  background-image: url(${props => props.bgImg});
  background-position: center;
  background-size: cover;
  transition: all 2s;
  box-shadow: inset 0 0 29px 0px ${props => props.theme.colors.blackTheme};
  &:after {
    content: "";
    width: 100%;
    height: 100vh;
    position: absolute;
    top: 0;
    left: 0;
    background-color: rgb(17, 12, 2, 0.6);
  }
  &.fade-appear {
    opacity: 0;
    transform: scale(0.94);
  }
  &.fade-appear-done {
    opacity: 1;
    transform: scale(1);
  }
`;
const PageHeadContent = styled.div`
  margin: auto;
  max-width: 720px;
  z-index: 2;
`;

const PageHeading = styled.div`
  ${props => props.theme.components.heading};
`;
const PageSubHeading = styled.div`
  ${props => props.theme.components.subheading};
  color: ${props => props.theme.colors.whiteTheme};
  cursor: pointer;
  padding: 3em;
  max-width: 500px;
`;
const Review = styled.p`
  font-style: italic;
`;
const Author = styled.div`
  padding: 6px;
  ${props => props.theme.fontStyles.small};
`;
const ReviewLink = styled.div``;
