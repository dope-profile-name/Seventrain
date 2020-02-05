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
         <div id="circle" />
         <div id="circleO" />
         <Img style={{display: `block`, border: `1px solid white`, borderRadius: `50%`, position: `absolute`, top: `90px`,
              left: `375px`, marginBottom: `15%`}} fixed={data.logoImage.childImageSharp.fixed} alt="Seventrain logo" />

         <Marquee />
      </Box>

      <div id="clock" style={{ borderTop: `2px solid white`, marginTop: `60px`, marginLeft: `auto`, marginRight: `auto`,
                       padding: `9px 0px 9px 9px`, width: `92%`}}>
         <Moment format="HH:mm DD/MM/YYYY" date={new Date()} />
      </div>
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
          fixed(width: 90, height: 90) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `;
