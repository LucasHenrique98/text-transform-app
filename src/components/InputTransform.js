import React, { Component } from 'react';
import InvertedInput from './Inputs/InvertedInput';
import NumericInput from './Inputs/NumericInput';
import SlugInput from './Inputs/CsvInput';
import css from './inputTransform.module.css';
import CsvInput from './Inputs/CsvInput';
import VowelInput from './Inputs/VowelInput';
import Consonant from './Inputs/Consonant';
import CamelCaseInput from './Inputs/CamelCaseInput';

const defaultState = {
  userInput: '',
};
export default class InputTransform extends Component {
  constructor() {
    super();

    this.state = {
      ...defaultState,
    };
  }

  handleInputText = (event) => {
    const { userInput } = this.state;
    const newUserInput = event.target.value;
    this.setState({
      userInput: newUserInput,
    });
  };

  render() {
    const { userInput } = this.state;

    return (
      <div>
        <h1 className={css.title}>React Text Transform App</h1>
        <hr />
        <div className={css.inputContainer}>
          <label htmlFor="">
            Input your Text Here:
            <input
              className={css.mainInput}
              type="text"
              value={userInput}
              onChange={this.handleInputText}
            />
          </label>
          <h3>Transformations</h3>
          Inverted Text:
          <InvertedInput userInput={userInput} />
          Numeric Text:
          <NumericInput userInput={userInput} />
          CSV Text:
          <CsvInput userInput={userInput} />
          Slug Text:
          <SlugInput userInput={userInput} />
          Only Vowel Text:
          <VowelInput userInput={userInput} />
          Only Consonant Text:
          <Consonant userInput={userInput} />
          CamelCase Text:
          <CamelCaseInput userInput={userInput} />
        </div>
      </div>
    );
  }
}
