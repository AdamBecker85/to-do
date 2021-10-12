import React from 'react';
import Container from '../Container/Container';
import Hero from '../Hero/Hero';
import { dataFaq } from '../../data/dataStore';

const Faq = () => (
  <Container>
    <Hero titleText={dataFaq.title} image={dataFaq.image}/>
    <h2>FAQ</h2>
    <p>{dataFaq.text}</p>
  </Container>
);

export default Faq;