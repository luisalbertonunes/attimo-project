import React from 'react';
import { Text, GlobalStyle, Input } from './components';
import { Fieldset, Flex } from './layout';

function App() {
  return (
   <>
    <GlobalStyle />
    <Text component="MainTitle" align="center">Hello world</Text>
    <Input/>
    <Fieldset label="rosa"/>
    <Flex justifyContent="space-between" direction="row" container>
      <Fieldset label="nome"/>
      <Fieldset label="teste"/>
    </Flex>
   </>
  );
}

export default App;
