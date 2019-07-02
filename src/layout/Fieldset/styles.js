import styled from 'styled-components';
import { Flex } from '../../layout';

export const FieldStyle = styled(Flex).attrs({
    direction: 'column',
})`
  width:100%;
  border: none;
  margin-bottom: 8px;
  

  label {
    display: block;
    position: relative;
    margin-bottom: 4px;
    text-indent: 2px;
  }

`;
