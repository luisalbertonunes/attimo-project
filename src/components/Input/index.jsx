import React from 'react';
import * as InputComponents from './styles.js';

const InputComponent = (props) => {
    const { component } = props;
    const ComponentName = component ?  InputComponents[component] : InputComponents.DefaultStyle;
    return <ComponentName {...props} />

}

export default InputComponent;