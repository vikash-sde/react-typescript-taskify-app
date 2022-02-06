import React from 'react';
import { Draggable, Droppable } from 'react-beautiful-dnd';
import { Todo } from '../models/models';
import SingleTodo from './SingleTodo';
import './styles.css'
interface Props {
    todos: Todo[];
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
    completedTodos: Todo[];
    setCompletedTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const TodoList = ({ todos, setTodos, completedTodos, setCompletedTodos }: Props) => {
    return (
        <div className="container">

            <Droppable droppableId="TodosList">
                {
                    (provided, snapshot) => (
                        <div className="todos" ref={provided.innerRef} {...provided.droppableProps}>
                            <span className="todos__heading">Active tasks</span>
                            <div >
                                {todos.map(todo => (
                                    <SingleTodo todo={todo} key={todo.id} todos={todos} setTodos={setTodos} />
                                ))}
                            </div>
                        </div>

                    )
                }
            </Droppable>
            <Droppable droppableId="TodosRemove">
                {
                    (provided, snapshot) => (
                        <div className="todos remove" ref={provided.innerRef} {...provided.droppableProps}>
                            <span className="todos__heading">Completed tasks</span>
                            <div >
                                {completedTodos.map(todo => (
                                    <SingleTodo todo={todo} key={todo.id} todos={completedTodos} setTodos={setCompletedTodos} />
                                ))}
                            </div>
                        </div>

                    )
                }
            </Droppable>

        </div>


    );


};

export default TodoList;
