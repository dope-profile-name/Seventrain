import React from 'react';
import PropTypes from 'prop-types';
import Layout from 'components/layout';
import Box from 'components/box';
import Title from 'components/title';
import Gallery from 'components/gallery';
import Img from 'gatsby-image';
import Moment from 'react-moment';
import Marquee from 'components/marquee';
import { graphql } from 'gatsby';


const Index = ({ data }) => (
   <Layout>
      <Box>
         <Img style={{display: `block`, margin: `0% auto 7%`, background: `pink`}}
            fixed={data.logoImage.childImageSharp.fixed}
            alt="Seventrain logo" />

         <Marquee />

         <div style={{borderTop: `1px solid white`, margin: `0`, padding: `.5rem 0rem 3rem 1.5rem`, position: `relative`}}>
            <Moment format="HH:mm DD/MM/YYYY" date={new Date()} />
         </div>
      </Box>


   </Layout>
);

Index.propTypes = {
  data: PropTypes.object.isRequired,
};

export default Index;

export const query = graphql`
    query indexQuery{
      logoImage: file(relativePath: { eq: "seventrain-logo.png" }) {
        childImageSharp {
          fixed(width: 150, height: 150) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `;
