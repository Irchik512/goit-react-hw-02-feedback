import React, { Component } from "react";
import Section from "components/Section/Section";
import Statistics from "components/Statistics/Statistics";
import FeedbackOptions from "components/FeedbackOptions/FeedbackOptions";
import Notification from "components/Notification/Notification";

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleIncrementFeedback = (event) => {
    const curentButton = event.target.name;

    switch (curentButton) {
      case "Good":
        this.setState((prevState) => ({ good: (prevState.good += 1) }));
        break;
      case "Neutral":
        this.setState((prevState) => ({ neutral: (prevState.neutral += 1) }));
        break;
      case "Bad":
        this.setState((prevState) => ({ bad: (prevState.bad += 1) }));
        break;
      default:
        return;
    }
  };
  countTotalFeedback = () =>
    this.state.good + this.state.neutral + this.state.bad;

  countPositiveFeedbackPercentage = () =>
    Math.round((this.state.good * 100) / this.countTotalFeedback());

  render() {
    return (
      <>
        <Section>
          <h2>Please leave Feedback</h2>
          <FeedbackOptions
            options={["Good", "Neutral", "Bad"]}
            onLeaveFeedback={this.handleIncrementFeedback}
          />
        </Section>
        <Section>
          <h2>Statistics</h2>
          {this.countTotalFeedback() < 1 ? (
            <Notification message="There is no feedback yet. Would you live the first one?" />
          ) : (
            <Statistics
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              total={this.countTotalFeedback()}
              positivePercentage={this.countPositiveFeedbackPercentage()}
            />
          )}
        </Section>
      </>
    );
  }
}

export default App;
