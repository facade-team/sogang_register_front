import React from 'react';

// components
import Title from '../components/Title/Title';
import FeedbackForm from '../components/FeedbackForm/FeedbackForm';

// styled
import {
  Container,
  HomeContainer as FeedbackContainer,
} from '../styles/HomeContainer';

const Feedback = ({ openModal }) => {
  return (
    <Container>
      <FeedbackContainer navigation="Feedback">
        <Title title="피드백/문의" openModal={openModal}></Title>
        <FeedbackForm></FeedbackForm>
      </FeedbackContainer>
    </Container>
  );
};

export default Feedback;
