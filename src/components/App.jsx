import React, { useState } from 'react';

import FeedbackOptions from './FeedbackOptions';
import Statistics from './Statistics';
import Section from './Section';
import Notification from './Notification';
// import initialButton from './FeedbackOptions/button.json';

export default function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const incrementFeedBack = feedback => {
    switch (feedback) {
      case 'good':
        setGood(prevStateGood => prevStateGood + 1);
        break;
      case 'neutral':
        setNeutral(prevStateNeutral => prevStateNeutral + 1);
        break;
      case 'bad':
        setBad(prevStateBad => prevStateBad + 1);
        break;
      default:
        console.warn(`Отзыва ${feedback} не существует `);
    }
  };

  const countTotalFeedback = () => {
    return good + neutral + bad;
  };

  const countPositiveFeedbackPercentage = () => {
    const total = countTotalFeedback();
    return Math.round((good * 100) / total) || 0;
  };

  return (
    <>
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={['good', 'neutral', 'bad']}
          onLeaveFeedback={incrementFeedBack}
        />
      </Section>
      <Section title="Statistics">
        {countTotalFeedback !== 0 ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback}
            positivePercentage={countPositiveFeedbackPercentage()}
          />
        ) : (
          <Notification message="There is no feedback" />
        )}
      </Section>
    </>
  );
}
