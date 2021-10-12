import React from 'react';
import Container from '../Container/Container';
import Hero from '../Hero/Hero';
import { dataInfo } from '../../data/dataStore';

const Info = () => (
  <Container>
    <Hero titleText={dataInfo.title} image={dataInfo.image}/>
    <h2>Info</h2>
    <p>{dataInfo.text}</p>
  </Container>
);

export default Info;