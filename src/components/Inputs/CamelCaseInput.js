import React, { Component } from 'react';
import css from '../inputTransform.module.css';
export default class CamelCaseInput extends Component {
  render() {
    const { userInput } = this.props;
    const camelCaseText = () => {
      return userInput
        .split(' ')
        .map((word, index) => {
          return index === 0
            ? word.toLowerCase()
            : word
                .toLowerCase()
                .split('')
                .map((char, indexx) => {
                  return indexx === 0 ? char.toUpperCase() : char;
                })
                .join('');
        })
        .join('');
    };
    return (
      <label htmlFor="">
        <input
          className={css.marginInput}
          type="text"
          readOnly
          value={camelCaseText()}
        />
      </label>
    );
  }
}
