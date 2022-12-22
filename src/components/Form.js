import styled from 'styled-components';

const FormTag = styled.form`
  margin-top: 65px;
  display: flex;
  font-size:50px;
  font-weight: bold;
  color: black;
  flex-direction: column;
  align-items: center;
`;
const InputTag = styled.input`
  width: 500px;
  height: 70px;
  margin-top: 40px;
  border: 3px solid transparent;
  border-radius: 15px;
  text-align: center;
  box-shadow: 3px 6px 40px #000;
  font-size: 33px;
  &::placeholder {
    color: rgba(0, 0, 0, 0.3);
  }
`;
const Button = styled.button`
  background: white;
  color: grey;
  border-radius: 20px;
  padding: 5px 15px;
  width: 100px;
  height: 40px;
  box-shadow: 3px 6px 40px #000;
  margin: 20px 0 40px 0;
  font-size: 15px;
  font-weight: bold;
  cursor:pointer;
  text-transform: uppercase;
  :hover {
    background-color: black;
  }
`;

const Form = ({ onSubmit, onChange, value }) => {
    <h1> Todo listing</h1>
  return (
    <FormTag onSubmit={onSubmit}>
        Todays Plan
      <InputTag
        onChange={onChange}
        value={value}
        type='text'
        placeholder='list'
      />
      <Button>Submit</Button>
    </FormTag>
  );
};

export default Form;