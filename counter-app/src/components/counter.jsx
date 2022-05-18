import React, { Component } from 'react'

class Counter extends Component {
  state = { 
    count: 0,
    tags: ['tag1', 'tag2', 'tag3']
    
  };

  /*style ={
    fontSize: 50,
    fontWeight: 'bold'
  };*/
  render() {
    //best to use className to do formatiing

    /* can get the classes with a variable or just call the method directly in the brackets
    let classes = this.getBadgeClasses();*/

    return (
      <React.Fragment>
        <span className= {this.getBadgeClasses()}>{this.formatCount()}</span> 
        <button className='btn btn-secoundary btn-sm'>Increment</button>
        <ul>
          {this.state.tags.map(tag => <li key={tag}>{tag}</li>)}
        </ul>
      </React.Fragment>
    );
  }

  getBadgeClasses() {
    let classes = 'badge m-2 badge-';
    classes += (this.state.count === 0) ? 'warning' : 'primary';
    return classes;
  }

  formatCount(){
    const { count } = this.state;
    
    return count === 0 ? 'Zero' : count;
  }
}

export default Counter
