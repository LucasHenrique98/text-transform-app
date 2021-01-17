import React, { Component } from 'react';
import css from '../inputTransform.module.css';
export default class SlugInput extends Component {
  render() {
    const { userInput } = this.props;
    const slugText = userInput.toLowerCase().replace(/ /g, '-');
    return (
      <label htmlFor="">
        <input
          className={css.marginInput}
          type="text"
          readOnly
          value={slugText}
        />
      </label>
    );
  }
}
