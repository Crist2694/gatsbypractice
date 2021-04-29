import {graphql, Link} from "gatsby";
import React from "react";
import Layout from '../pages/components/Layout';
import styled from 'styled-components';

const Header =styled.header`
display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 40px;
    align-items: center;
`;

const H2 = styled.h2`
  font-size: 4em;
  `;

const H3 = styled.h3`
  font-size: 3em;
    font-weight: 400;
    margin-bottom: 20px;

`;
const Btn = styled.button`
display: inline-block;
    background: #D42990;
    padding: 10px 16px;
    border-radius: 10px;
    margin-top: 20px;
    font-weight: 500;
`;

export default function Home() {


  return (
    <Layout>
    <Header >
        <div>
        <H2>Design</H2>
        <H3>Develop & Deploy</H3>
        <p>UX Designer & web developer based in Manchester</p>   
        <Link to='/projects'><Btn>My Portfolio Projects</Btn></Link>
        
      </div>
      <img src="/banner.png" alt="site banner" style={{ maxWidth: '90%'}}/>
 

    </Header>
    </Layout>
  )
}
