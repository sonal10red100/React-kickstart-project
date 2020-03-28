import React, {Component} from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component{
    state = {
        persons: [
            { name: 'Sonal', age: 20 },
            { name: 'Julie', age: 21 },
            { name: 'Natasha', age: 20 }]
    }

    switchNameHandler = (newName) => {
       // console.log("Was clicked");
        this.setState({
            persons: [
                { name: newName, age: 20 },
                { name: 'Julie', age: 21 },
                { name: 'Natasha Dalal', age: 20 }]
        })
    }
     
    nameChangeHandler = (event) => {
        this.setState({
            persons: [
                { name: 'Sonal', age: 20 },
                { name: event.target.value, age: 21 },
                { name: 'Natasha', age: 20 }]
        })
    }

    render() {
        const style = {
            backgroundColor: 'gray',
            font: 'inherit',
            border: '1px solid blue',
            padding: '8px',
            cursor: 'pointer'
        };

        return (
            <div className="App">
                <h1>I am a React App</h1>
                <button style={style}onClick={() => this.switchNameHandler('Son')}>Switch name</button>
                <Person name={this.state.persons[0].name} age={this.state.persons[0].age} />
                <Person changed={this.nameChangeHandler} click={this.switchNameHandler} name={this.state.persons[1].name} age={this.state.persons[1].age} />
                <Person name={this.state.persons[2].name} age={this.state.persons[2].age} />
            </div>
        );
    }

}

export default App;
