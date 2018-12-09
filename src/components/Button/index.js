import React from 'react';
import {TouchableOpacity} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

export default Button = ({iconName, onPress, size}) =>
{
    return (
        <TouchableOpacity onPress={onPress}>
            <FontAwesome5 name={`${iconName}`} 
                color={'white'} 
                size={size}
                solid/>
        </TouchableOpacity>
    )    
}