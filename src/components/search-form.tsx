import React, { FormEvent, useState } from 'react';

import styled from 'styled-components';

const Form = styled.form`
  align-items: center;
  color: #fff;
  display: flex;
  justify-content: center;
  height: 1.5rem;
`;
const Input = styled.input`
  background: none;
  border: solid 1px #ccc;
  color: inherit;
  font-family: 'Roboto Mono', monospace;
  font-size: 0.75rem;
  height: 1.5rem;
  padding: 1rem 1.5rem;
  text-align: center;
  text-transform: uppercase;
  width: 34rem;

  &:focus {
    outline: none;
  }

  ::placeholder {
    color: inherit;
  }
`;

interface ISearchFormProps {
  onSubmit: Function;
}

export default function SearchForm({ onSubmit }: ISearchFormProps) {
  const [ input, setInput ] = useState('');
  const submitHandler = (event: FormEvent) => {
    event.preventDefault();
    console.log('se', input);
    onSubmit(input);
  };

  return (
    <Form data-testid="search-form" onSubmit={ submitHandler }>
      <Input
        defaultValue={ input }
        data-testid="search-input"
        onChange={ event => setInput(event.currentTarget.value) }
        name=""
        placeholder="Enter Spotify Playlist Link Here"
        type="text"
        />
    </Form>
  );
}
