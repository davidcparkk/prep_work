import React from 'react';
import './App.css';

class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      term: "",
      currentNum: 1,
      items: [],
      currentItem: { title: "", num: "", checked: false, textDecor: null }
    }
  }

  handleChange = (e) => {
    const itemText = e.target.value;
    const currentItem = { title: this.state.term, num: this.state.currentNum }
    this.setState({ currentItem, term: itemText })
  }
  
  addListItem = () => {
    const newItem = this.state.currentItem;
    const items = [...this.state.items, newItem]
    this.setState({
      items: items,
      currentNum: this.state.currentNum + 1,
      currentItem: { title: "", num: this.state.currentNum }
    })
  }

  removeListItem = (num) => {
    const filteredItems = this.state.items.filter(el => {
      return el.num !== num;
    });
    this.setState({
      items: filteredItems
    })
  }

  strikeThrough = (e) => {
    if (!e.target.checked){
      e.target.checked = true;
      e.target.textDecor = 'line';
    }



    // if (!items[idx].checked){
    //   items[idx].checked = true;
    //   items[idx].textDecor = 'line';
    //   this.setState({
    //     items: items
    //   })
    // } else {
    //   items[idx].checked = false;
    //   items[idx].textDecor = null;
    //   this.setState({
    //     items: items
    //   })
    // }
  }

  render(){
    const renderedlist = this.state.items.map( (el,idx) => {
      return(
        <li key={el.num}>
          <input type ='checkbox' onChange={this.strikeThrough} check="check"></input>
          <span>{el.num}. {el.title}</span>
          <button onClick={() => this.removeListItem(el.num)}>X</button>
        </li>
      )
    })
    
    return(
      <div id="todo">
        <h1>To Do App</h1>
        <ul>
          {renderedlist}
          <div id="actions">
            <input
              type="text"
              value={this.state.term}
              onChange={this.handleChange}
            ></input>
            <button 
              onClick={this.addListItem}
            >Add new task</button>
          </div>

        </ul>
      </div>
    )
  }
}

export default App;