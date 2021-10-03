import React from "react";
import Title from './components/Title';
import ShoppingList from './components/ShoppingList';
import styles from './App.module.css';
import './App.css';

/* A ES6 class style stateful component for the shopping list application */
class App extends React.Component {
  constructor(props)
  {
    /* You should call super(props) before any other statement. 
       Otherwise, this.props will be undefined in the constructor, which can lead to bugs.
    */
    super(props);

    this.state = {
      items: [
        { id: 1, value: 'Milk', qty: 5, unit: 'ltr' },
        { id: 2, value: 'Bananas', qty: 6, unit: 'pcs' },
        { id: 3, value: 'Bread', qty: 3, unit: 'x' },
        { id: 4, value: 'Eggs', qty: 16, unit: 'x' }
      ]
    };

    this.addJuice =  this.addJuice.bind(this);
    this.addPineapple =  this.addPineapple.bind(this);
    this.addSausage =  this.addSausage.bind(this);
    this.addPeanuts =  this.addPeanuts.bind(this);

  }
  
  addJuice(){
    this.setState({items: [...this.state.items, {id:5, value: "Juice", qty: 10, unit: 'ltr'}]})
  }

  addPineapple(){
    this.setState({items: [...this.state.items, {id:6, value: "Pineapple", qty: 7, unit: 'pcs'}]})
  }

  addSausage(){
    this.setState({items: [...this.state.items, {id:7, value: "Sausage", qty: 2, unit: 'x'}]})
  }

  addPeanuts(){
    this.setState({items: [...this.state.items, {id:8, value: "Peanuts", qty: 1, unit: 'bag'}]})
  }

  render()
  {
    const { applicationDescription, applicationName } = this.props;
    return <div className={ styles.shoppingList }>
      <Title 
        applicationDescription={ applicationDescription }
        applicationName={ applicationName }
      />
      <ShoppingList items={ this.state.items } />
      <button onClick={ this.addJuice }>Juice</button>
      <button onClick={ this.addPineapple }>Pineapple</button>
      <button onClick={ this.addSausage }>Sausage</button>
      <button onClick={ this.addPeanuts }>Peanuts</button>
    </div>
  }
}

export default App;