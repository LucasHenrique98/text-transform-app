import React, { Component } from 'react';
import css from '../inputTransform.module.css';

export default class NumericInput extends Component {
  render() {
    const { userInput } = this.props;
    const numericText = () => {
      let numericText = userInput.toUpperCase();
      numericText = numericText.replace(/O/gi, '0');
      numericText = numericText.replace(/L/gi, '1');
      numericText = numericText.replace(/E/gi, '3');
      numericText = numericText.replace(/A/gi, '4');
      numericText = numericText.replace(/A/gi, '4');
      numericText = numericText.replace(/S/gi, '5');
      numericText = numericText.replace(/T/gi, '7');
      return numericText;
    };
    return (
      <label htmlFor="">
        <input
          className={css.marginInput}
          type="text"
          readOnly
          value={numericText()}
        />
      </label>
    );
  }
}
