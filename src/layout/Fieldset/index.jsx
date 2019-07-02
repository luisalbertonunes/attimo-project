import React from 'react';
import { FieldStyle } from './styles';
import { Text, Input } from '../../components'

const Fieldset = (props) => {
   const { label, children, ...otherProps} = props;
   return( 
        <FieldStyle>
            {label && <Text>{label}</Text>}
            <Input {...otherProps}/>
        </FieldStyle>
    );
}

export default Fieldset