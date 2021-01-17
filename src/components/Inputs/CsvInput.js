import React, { Component } from 'react';
import css from '../inputTransform.module.css';

export default class CsvInput extends Component {
  render() {
    const { userInput } = this.props;
    const csvText = () => {
      const aspString = userInput.split(' ').map((word) => {
        if (userInput === '') {
          return '';
        }
        return `"${word}"`;
      });
      return aspString.join().replace(' ', ';');
    };
    return (
      <label htmlFor="">
        <input
          className={css.marginInput}
          type="text"
          value={csvText()}
          readOnly
        />
      </label>
    );
  }
}
