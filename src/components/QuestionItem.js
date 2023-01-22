import React from "react";

// function QuestionItem({ question }) {
function QuestionItem({ question, onDeleteClick, onAnswerChange }) {
  const { id, prompt, answers, correctIndex } = question;

  const options = answers.map(answer, index => (
function QuestionItem({ question }) {
    <options/>
 
      }
   )
 );

  function handleDeleteClick() {
    onDeleteClick(id);
  }

  function handleAnswerChange(event) {
    onAnswerChange(id, parseInt(event.target.value));
  }

  return (
    <li>
      <h4>Question {id}</h4>
      <h5>Prompt: {prompt}</h5>
      <label>
        Correct Answer:
        <select defaultValue={correctIndex}>{options}</select>
        <select defaultValue={correctIndex} onChange={handleAnswerChange}>
          {options}
        </select>
      </label>
      <button>Delete Question</button>
      <button onClick={handleDeleteClick}>Delete Question</button>
    </li>
  );

export default QuestionItem