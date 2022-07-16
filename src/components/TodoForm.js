import React, {useState, useEffect, useRef} from 'react';

function TodoForm(props) {
  const [input, setInput] = useState(props.edit ? props.edit.value : '');
  const inputRef = useRef(null);
  useEffect(() => {
    inputRef.current.focus()
  })
  
  const handleChange = e => {
    setInput(e.target.value)
  }
  //Function clears he default effects on submitting the form,then creates a pattern-object as props.onSubmit consisting of 2 pairs of keys and values(id & text) in which the input will be exposed. And the input-space is cleaned afterwards by setInput re-setting to "".{{{{{{{{{Question}}}}}}}}} Finally,it's a form with onSubmit function, consisting of 1)input which has it's own function -handleChange resetting the input state according to the input.value changes; 2)submit-button itself

  const handleSubmit = e => {
    e.preventDefault();
    props.onSubmit({
      id: Math.floor(Math.random() * 10000),
      text: input
    });
    setInput('');
  };
  return (
    // TodoForm принимает-имеет свойство(property) onSubmit, которое вызывает функцию  handleSubmit. В коде выше мы в самом начале говорим о том, что будем передавать дальше свойства(props). Внутри логики функции указываем-пишем где(в handleSubmit) и  как именно (разворачиваем содержимое в виде объекта) мы используем параметр onSubmit. Но это не точно... И в обратном порядке, там где используется форма она поттягивает с собой и свое свойство onSubmit. Смотри компонент TodoPage. 
    <form className='todo-form' onSubmit={handleSubmit}>
      {props.edit ? (
        <> 
          <input 
            type="text"
            className='todo-input edit' 
            placeholder='Update your item' 
            value={input}
            name='text'   //Only form elements with a name attribute will have their values passed when submitting a form.
            onChange={handleChange}
            ref={inputRef}
          />
          <button className='todo-btn edit'>Update</button>
        </>
        ) : (
        <>
          <input 
            type="text"
            className='todo-input' 
            placeholder='Add your todo' 
            value={input}
            name='text'   //Only form elements with a name attribute will have their values passed when submitting a form.
            onChange={handleChange}
            ref={inputRef}
          />
          <button className='todo-btn'>Add a todo</button>
        </>
      )}    
    </form>
  );
}

export default TodoForm;  //передает компонент с его параметрами (props)