import React, { Component } from 'react';
import css from '../inputTransform.module.css';
export default class Consonant extends Component {
  render() {
    const { userInput } = this.props;
    const onlyConsonantText = userInput.replace(/[aeiou]/gi, '');
    return (
      <label htmlFor="">
        <input
          className={css.marginInput}
          type="text"
          readOnly
          value={onlyConsonantText}
        />
      </label>
    );
  }
}
