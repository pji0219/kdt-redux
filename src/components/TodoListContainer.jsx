import React from 'react';
import TodoList from './TodoList';
import DoneList from './DoneList';

function TodoListContainer() {
  return (
    <>
      <TodoList />
      <DoneList />
    </>
  );
}

export default TodoListContainer;
