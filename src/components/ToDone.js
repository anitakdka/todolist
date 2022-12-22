import { Draggable } from 'react-beautiful-dnd';
import styled from 'styled-components';

const Item = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px 5px;
  margin-bottom: 5px;
  background-color: white;
  border-bottom: 2px solid red;
  border: ${(props) => (props.isDragging ? '2px solid red' : null)};
  border-radius: ${(props) => (props.isDragging ? '10px' : null)};
`;
const Text = styled.span`
  width: 80%;
  height: auto;
  font-size: 25px;
  word-break: break-all;
  line-height: 1.3;
  text-decoration: line-through red;
`;
const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Button = styled.button`
  width: 50px;
  border-radius: 5px;
  background: red;
  color: white;
  padding: 3px;
  &:first-child {
    width: 50px;
    margin-bottom: 3px;
  }
`;

const ToDone = ({ id, text, changeCategory, delRow, index }) => (
  <Draggable draggableId={String(id)} index={index}>
    {(provided, snapshot) => (
      <Item
        id={id}
        ref={provided.innerRef}
        {...provided.dragHandleProps}
        {...provided.draggableProps}
        isDragging={snapshot.isDragging}
      >
        <Text>{text}</Text>
        <ButtonContainer>
          <Button name='toDone' onClick={changeCategory}>
            Do
          </Button>
          <Button name='toDone' onClick={delRow}>
            Delete
          </Button>
        </ButtonContainer>
      </Item>
    )}
  </Draggable>
);

export default ToDone;