/* eslint-disable react/no-unescaped-entities */
import React, { useState } from 'react';
import TodoForm from './TodoForm';
import Todo from "./Todo";


//The component creates a list of todos starting from [] with the help of adding-function and delete-function. Finally,it's a component TodoForm with su 
function TodoPage() {
  const [todos, setTodos] = useState([]);

  // В следющей строке мы говорим, что функция работает с поступившей инфой- тудушкой, которая есть то, что поступает с TodoForm при сабмите. Тот самый объект, поступивший при onSubmit из TodoForm. Именно здесь происходит его использование, а именно, его свойство text, равное инпуту.  
  const addTodo = todo => {
    // если в инпут = false(ничего внутри) или вся строка внтри состоит т начала до конца из пробелов, тогда ничего не делаем. 
    if (!todo.text || /^\s*$/.test(todo.text)) {
      return;
    }
    const newTodos = [todo, ...todos];
    setTodos(newTodos);
  }

  const completeTodo = id => {
    let updatedTodos = todos.map(todo => {
      if (todo.id === id) {
        todo.isComplete = !todo.isComplete
      }
      return todo;
    });
    setTodos(updatedTodos);
  }

  const updateTodo = (todoId, newValue) => {
    if (!newValue.text || /^\s*$/.test(newValue.text)) {
      return;
    }
    setTodos(prev => prev.map(item => (item.id === todoId ? newValue : item)));
  }

  const removeTodo = id => {
    const afterRemovedArr = [...todos].filter(todo => todo.id !== id);
    setTodos(afterRemovedArr);
  }

  return (
    <div>
      <h1>What's your plan for today?</h1>
      {/* Ниже мы принимаем форму с сформированными пропсами и используем их далее для собственной функции addTodo и так далее */}
      <TodoForm onSubmit={addTodo} />
      <Todo todos={todos} completeTodo={completeTodo} removeTodo={removeTodo} updateTodo={updateTodo} />
    </div>
  )
}

export default TodoPage;