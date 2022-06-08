import React from 'react';
import classes from './NewTodo.module.css';

const NewTodo : React.FC<{onAddTodo: (text: string) => void }> = (props) => {
  const todosTextInputRef = React.useRef<HTMLInputElement>(null);

  const submitHandler =(event: React.FormEvent) => {
    event.preventDefault();
    const enteredText = todosTextInputRef.current!.value;

    if (enteredText.trim().length === 0){
      return
    }
    props.onAddTodo(enteredText)
  };

  return (
    <form onSubmit={submitHandler} className={classes.form}>
      <label>Todo text</label>
      <input type="text" id="text" ref={todosTextInputRef}/>
      <button>Add Todo</button>
    </form>
  );
};

export default NewTodo;
