import React from 'react';
import * as TextComponents from './styles.js'

const TextComponent = (props) => {
    const { children, text, component, ...otherProps } = props;
    const ComponentName = component ?  TextComponents[component] : TextComponents.DefaultStyle;
    console.log(ComponentName);
    return <ComponentName {...otherProps}>{text || children}</ComponentName>
}

export default TextComponent;