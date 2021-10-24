import React from "react";

import { useState } from "react";
import Statistics from "./components/Statisctics.js/Statistics";
import FeedbackOptions from "./components/FeedbackOptions/FeedbackOptions";
import Section from "./components/Section/Section";

export default function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeu] = useState(0);
  const [bad, setBad] = useState(0);

  const countTotalFeedback = () => good + bad + neutral;

  const countPositiveFeedbackPercentage = () =>
    (good / countTotalFeedback()) * 100;

  const handleFeedBack = (e) => {
    const { textContent } = e.target;
    console.log(textContent);

    switch (textContent) {
      case "Good":
        setGood((prevState) => (prevState += 1));
        break;
      case "Neutral":
        setNeu((prevState) => (prevState += 1));
        break;
      case "Bad":
        setBad((prevState) => (prevState += 1));
        break;
      default:
        return;
    }
  };

  return (
    <div>
      <Section title="Please leave your feedback">
        <FeedbackOptions
          options={["Good", "Neutral", "Bad"]}
          onLeaveFeedback={handleFeedBack}
        />
      </Section>
      <Section title="Statistics">
        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          total={countTotalFeedback()}
          positivePercentage={
            Math.round(countPositiveFeedbackPercentage()) || 0
          }
        />
      </Section>
    </div>
  );
}
