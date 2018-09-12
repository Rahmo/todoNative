import React from 'react';
import { View,Text, TextInput ,TouchableHighlight} from 'react-native';

export const TodoFrom = (props)=>(
    <View>{props.todos.map((todo, i) => (<Text key={i}>{todo}</Text>))}
        <TextInput type="text" placeholder={"enter text here"} value={props.newTodo} onChange={props.handleChange}/>
        <TouchableHighlight onPress={props.handlePress} >
            <Text>yo press me</Text>
        </TouchableHighlight>);
    </View>
);
