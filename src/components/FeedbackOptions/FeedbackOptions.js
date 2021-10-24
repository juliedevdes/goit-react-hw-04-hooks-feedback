import React from "react";
import PropTypes from "prop-types";
import s from "./FeedbackOption.module.css";

export default class FeedbackOptions extends React.Component {
  static defaultProps = {
    options: [],
  };

  static propTypes = {
    options: PropTypes.arrayOf(PropTypes.string),
    onLeaveFeedback: PropTypes.func,
  };

  render() {
    return (
      <ul className={s.list}>
        {this.props.options.map((option) => (
          <li key={option} className={s.item}>
            <button className={s.btn} onClick={this.props.onLeaveFeedback}>
              {option}
            </button>
          </li>
        ))}
      </ul>
    );
  }
}
