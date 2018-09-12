import React, { Component } from 'react';
import { View} from 'react-native';
import {connect} from 'react-redux'
import {TodoFrom} from 'todoForm'
 class Todox extends Component {
    constructor() {
        super();
        this.state = {
            newTodo: ''
        };
    }
     handleChange(e) {
         this.setState({newTodo: e.target.value});
     };

     handlePress() {
         this.props.createToDO(this.state.newTodo);
     };

     render(){
        return (
            <View>
                <TodoFrom/>
            </View>
        );
    }
}

const mapDispatchToProps = (dispatch) =>({
    createToDO(todo){
        dispatch({type:'CREATE_TODO',payload:todo})
    }
});

const mapStateToProps = (state) => (
    {todos:state.todos}
)
export const _Todo = connect( mapStateToProps,mapDispatchToProps)(Todox);
