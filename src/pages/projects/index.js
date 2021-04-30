import React from 'react';
import Layout from '../components/Layout';
import styled from 'styled-components';
import { graphql, Link } from 'gatsby';

const Portfoliodiv = styled.div`
    text-align: center;
`;
const H2 = styled.h2`
    font-size: 3em;
    margin-top: 80px;
`;

const H3 = styled.h3`
    font-size: 2em;
    font-weight: 400;
`
const DivProjects = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 80px;
    margin: 80px 20px;
`
const H3Projects = styled.h3 `
    text-align: center;
    margin: 20px auto 0px;
    font-weight: 500;
`
const PProjects = styled.p `
    color: #ccc;
    margin-top: 4px;
`



export default function Projects({data}) {
    console.log(data);
    const projects = data.projects.nodes
    const contact = data.contact.siteMetadata.contact
    return (
        <Layout>
        <Portfoliodiv>
            <H2>Portafolio</H2>
            <H3>Projects & websites I´ve Created</H3>
            <DivProjects>
                {
                    projects.map(project => (
                        <Link to={"/projects/" + project.frontmatter.slug} key={project.id}>
                            <div>
                                <H3Projects>
                                    { project.frontmatter.title}
                                </H3Projects>
                                <PProjects>{project.frontmatter.stack}</PProjects>
                            </div>
                        </Link>
                    ))}
            </DivProjects>
            <PProjects>Like what you see? Email me at {contact} for a quote!</PProjects>   
        </Portfoliodiv>
        </Layout>
    )
}

// export page query

export const query =graphql`
query ProjectsPage {
   projects: allMarkdownRemark(sort: {fields: frontmatter___title, order: DESC}) {
    nodes {
      frontmatter {
        slug
        stack
        title
      }
      id
    }
  }
  contact: site{
    siteMetadata{
          contact
      }
  }
}

`
