import * as React from 'react';
import { css } from 'emotion';

import { Container } from '../Layout';
import { media, colors } from '../../utils/css';

const containerStyles = css`
  margin: 88px auto;
  padding: 0 80px;
`;

const markdownStyles = css`
  .gatsby-highlight {
    margin-bottom: 40px;
  }

  ${media.mobile`
    .gatsby-highlight {
      margin-left: -24px;
      margin-right: -24px;
      border-radius: 0;
    }
  `} a {
    color: ${colors.governorBay};
  }
`;

export function Support({ data }) {
  return (
    <Container className={containerStyles}>
      <div
        className={markdownStyles}
        dangerouslySetInnerHTML={{ __html: data.html }}
      />
    </Container>
  );
}

export const query = graphql`
  fragment Support on RootQueryType {
    support: markdownRemark(id: { regex: "/home/support/" }) {
      html
    }
  }
`;
