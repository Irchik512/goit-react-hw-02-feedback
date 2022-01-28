import React, { Component } from 'react';
import Section from 'components/Section/Section';
import Statistics from 'components/Statistics/Statistics';
import FeedbackOptions from 'components/FeedbackOptions/FeedbackOptions';
import Notification from 'components/Notification/Notification';

class App extends Component {
  state = {
    Good: 0,
    Neutral: 0,
    Bad: 0,
  };

  handleIncrementFeedback = e => {
    const { name } = e.target;
    this.setState(prevState => ({ [name]: prevState[name] + 1 }));
  };
  countTotalFeedback = () =>
    this.state.Good + this.state.Neutral + this.state.Bad;

  countPositiveFeedbackPercentage = () =>
    Math.round((this.state.Good * 100) / this.countTotalFeedback());

  render() {
    console.log(Object.keys(this.state));
    return (
      <>
        <Section>
          <h2>Please leave Feedback</h2>
          <FeedbackOptions
            options={Object.keys(this.state)}
            onLeaveFeedback={this.handleIncrementFeedback}
          />
        </Section>
        <Section>
          <h2>Statistics</h2>
          {this.countTotalFeedback() < 1 ? (
            <Notification message="There is no feedback yet. Would you live the first one?" />
          ) : (
            <Statistics
              Good={this.state.Good}
              Neutral={this.state.Neutral}
              Bad={this.state.Bad}
              Total={this.countTotalFeedback()}
              positivePercentage={this.countPositiveFeedbackPercentage()}
            />
          )}
        </Section>
      </>
    );
  }
}

export default App;
