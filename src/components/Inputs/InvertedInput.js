import React, { Component } from 'react';
import css from '../inputTransform.module.css';

export default class InvertedInput extends Component {
  render() {
    const { userInput } = this.props;
    const invertedTextValue = userInput.split('').reverse().join('');
    return (
      <label htmlFor="">
        <input
          className={css.marginInput}
          type="text"
          value={invertedTextValue}
          readOnly
        />
      </label>
    );
  }
}
