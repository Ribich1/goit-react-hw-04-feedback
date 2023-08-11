import React from 'react';
import PropTypes from 'prop-types';
import css from './FeedBackOption.module.css';

const FeedbackOptions = ({ options, onLeaveFeedback }) => (
  <ul className={css.buttonList}>
    {options.map((butt, index) => (
      <li key={index} className={css.button__item}>
        <button
          onClick={() => {
            onLeaveFeedback(butt);
          }}
        >
          {butt}
        </button>
      </li>
    ))}
  </ul>
);

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;
