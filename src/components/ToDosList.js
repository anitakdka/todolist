import { Droppable } from 'react-beautiful-dnd';
import styled from 'styled-components';
import ToDo from './ToDo';

const DoContainer = styled.div`
  min-width: 500px;
`;

const ListTitle = styled.h1`
  margin-left: 15px;
  margin-bottom: 30px;
  font-size: 35px;
  font-weight: bold;
`;

const List = styled.ul`
  width: 100%;
  border: 1px solid rgba(0, 0, 0, 0.9);
  padding: 5px 10px 10px 10px;
  background: rgba(255, 255, 255, 1);
`;

const ToDosList = ({ toDos, changeCategory, delRow }) => {
  return (
    toDos.length > 0 && (
      <DoContainer>
        <ListTitle>Do List</ListTitle>
        <Droppable droppableId='toDosId'>
          {(provided) => {
            return (
              <List ref={provided.innerRef} {...provided.droppableProps}>
                {toDos.map((toDo, index) => (
                  <ToDo
                    key={toDo.id}
                    {...toDo}
                    index={index}
                    changeCategory={changeCategory}
                    delRow={delRow}
                  />
                ))}
                {provided.placeholder}
              </List>
            );
          }}
        </Droppable>
      </DoContainer>
    )
  );
};

export default ToDosList;