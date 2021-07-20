import React from "react";
import { isElementOfType } from "react-dom/cjs/react-dom-test-utils.production.min";


class App extends React.Component {
  constructor(props){
    super(props);

    this.state={
      newItem:"",
      list:[]
    }
  }
  updateInput(key,value){
    this.setState({
      [key]:value
    });

  }

  addItem(){
    const newItem={
      id:1+Math.random(),
      value:this.state.newItem.slice()
    };
    const list=[...this.state.list];
    list.push(newItem);
    this.setState({
      list ,
      newItem:""
    });
  }
  deleteItem(id){
    const list=[...this.state.list];
    const updatedList=list.filter(item =>item.id!==id);
    this.setState({list:updatedList});
  }
  render(){
   return(
    <>
     <h2>Project By Antarpreet</h2>
    <div className="main_div">
    
      <div className="center_div" onSubmit={this.addItem}>
     
        <br/>
        <h1>ToDo List</h1>
        <br/>
        <input type="text" 
        placeholder="Add Items" 
        value={this.state.newItem}
        onChange={ e =>this.updateInput("newItem",e.target.value)}

        />

        <button type="submit" onClick={()=>this.addItem()} > + </button>
        <br/>
        <ul>
          {this.state.list.map(item =>{
            return(
              <li key={item.id}>
                {item.value}
                <button id="deletebutton"
                  onClick={() => this.deleteItem(item.id)}>
                    -
                </button>

              </li>
            )
          })}
        </ul>
        </div>
      
      </div>
    </>

   );
 }
}
export default App;
