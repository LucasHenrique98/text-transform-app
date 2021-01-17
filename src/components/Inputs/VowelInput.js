import React, { Component } from 'react';
import css from '../inputTransform.module.css';

export default class VowelInput extends Component {
  render() {
    const { userInput } = this.props;
    const onlyVowelText = userInput.replace(/[bcdfghjklvmnpqrswxyz]/gi, '');
    return (
      <label htmlFor="">
        <input
          className={css.marginInput}
          type="text"
          readOnly
          value={onlyVowelText}
        />
      </label>
    );
  }
}
