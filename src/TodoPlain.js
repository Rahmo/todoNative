import React, { Component } from 'react';
import { Text, View, TextInput ,TouchableHighlight} from 'react-native';
export class TodoPlain extends Component {
    constructor() {
        super();
        this.state = {
            todos: [1, 2, 4,7],
            newTodo: ''
        };
    }
    handleChange(e) {
        this.setState({newTodo: e.nativeEvent.text});
    };
    handlePress() {
        this.setState({todos:[...this.state.todos,this.state.newTodo],newTodo:''})
    };

    render(){
        return (
            <View>
                {this.state.todos.map((todo,i)=>(<Text key={i}>{todo} and {i}</Text>))}
                <TextInput type="text" placeholder={"enter text here"} value={this.state.newTodo} onChange={this.handleChange.bind(this)}/>
                <TouchableHighlight onPress={this.handlePress.bind(this)} >
                    <Text>yo press me</Text>
                </TouchableHighlight>
            </View>
        );
    }
}
