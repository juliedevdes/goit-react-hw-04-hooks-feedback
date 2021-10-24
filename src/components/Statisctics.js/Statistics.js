import React from "react";
import Notification from "../Notification/Notification.js";
import PropTypes from "prop-types";
import s from "./Statistics.module.css";

export default function Statistics({
  good,
  bad,
  neutral,
  total,
  positivePercentage,
}) {
  if (total === 0) {
    return <Notification message="No feedback given" />;
  } else {
    return (
      <div>
        <ul className={s.list}>
          <li className={s.item}>Good: {good}</li>
          <li className={s.item}>Neutral: {neutral}</li>
          <li className={s.item}>Bad: {bad}</li>
          <li className={s.item}>Total: {total}</li>
          <li className={s.item}>
            Positive percentage: {positivePercentage} %
          </li>
        </ul>
      </div>
    );
  }
}

Statistics.defaultProps = {
  good: 0,
  neutral: 0,
  bad: 0,
  total: 0,
  positivePercentage: 0,
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
