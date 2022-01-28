import PropTypes from 'prop-types';

export default function Statistics({ positivePercentage, ...Other }) {
  return (
    <div>
      {Object.keys(Other).map(prop => (
        <p key={prop}>
          {prop}: {Other[prop]}
        </p>
      ))}
      <p> Positive Feedback: {positivePercentage}%</p>
    </div>
  );
}

Statistics.propTypes = {
  Other: PropTypes.shape({
    Good: PropTypes.number.isRequired,
    Neutral: PropTypes.number.isRequired,
    Bad: PropTypes.number.isRequired,
    Total: PropTypes.number.isRequired,
  }),
  positivePercentage: PropTypes.number.isRequired,
};
