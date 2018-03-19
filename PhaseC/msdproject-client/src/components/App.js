import React from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';

// stateless function
// const App = () => <h1> Plagiarism System </h1>

class App extends React.Component {

  // constructor(){
  //   super();
  //   this.state = {
  //     txt: "State text",
  //     cat: 0,
  //     currentEvent: "---",
  //     a: ''
  //   }
  //   this.update = this.update.bind(this)
  // }
  //
  // update(e){
  //   this.setState({txt: e.target.value,
  //     currentEvent: e.type,
  //     a: e.target.value})
  // }
  //
  // render() {
  //   let txt = this.props.txt;
  //   return (
  //     <div>
  //       <h1>Hello World</h1>
  //       <Title text="Hellooooo"/>
  //       <textarea
  //       onKeyPress={this.update}
  //       onCopy={this.update}
  //       onPaste={this.update}
  //       onCut={this.update}
  //       onFocus={this.update}
  //       onBlur={this.update}
  //       onDoubleClick={this.update}
  //       onTouchStart={this.update}
  //       onTouchMove={this.update}
  //       onTouchEnd={this.update}
  //       cols="30"
  //       rows="10"/>
  //       <h1> {this.state.currentEvent} </h1>
  //       <p> {txt} </p>
  //       <h2> {this.state.txt} </h2>
  //       <Widget update={this.update.bind(this)} />
  //       <br></br>
  //       <span></span>
  //       <input type="text" onChange={this.update} />
  //       {this.state.a}
  //     </div>
  //   )
  // }

  // constructor(){
  //   super();
  //   this.state={
  //     a:'',
  //     b:'',
  //     c:'',
  //     d:''
  //   }
  // }
  //
  // update(){
  //   this.setState({
  //     a:this.refs.a.value,
  //     b:this.b.value,
  //     c:ReactDOM.findDOMNode(this.c).value,
  //     d:this.d.refs.input.value
  //   })
  // }
  //
  // render(){
  //   return(
  //     <div>
  //     <input ref="a" type="text" onChange={this.update.bind(this)} />
  //     {this.state.a}
  //     <hr />
  //     <input ref={node => this.b = node} type="text" onChange={this.update.bind(this)} />
  //     {this.state.b}
  //     <hr />
  //     <Input ref={component => this.c = component}
  //     Update={this.update.bind(this)} />
  //     {this.state.c}
  //     <hr />
  //     <Input2 ref={component => this.d = component}
  //     Update={this.update.bind(this)} />
  //     {this.state.d}
  //     </div>
  //   )
  // }

   constructor(){
     super();
     this.state ={val:1}
     this.update = this.update.bind(this)
   }
   update(){
     this.setState({val: this.state.val +1})
   }
   componentWillMount(){
     console.log("Component will mount")
     this.setState({m:2})
   }
   render(){
     console.log("Render");
     return(
       <button onClick={this.update}> {this.state.val * this.state.m} </button>
     )
   }
   componentWillUnMount(){
     console.log("component Will UnMount")
     clearInterval(this.inc)
   }
   componentDidMount(){
     console.log("component Did Mount");
     this.inc = setInterval(this.update,500)
   }
}

class Wrapper extends React.Component{

  mount(){
    ReactDOM.render(<App />,document.getElementById('a'))
  }
  unmount(){
    ReactDOM.unmountComponentAtNode(document.getElementById('a'))
  }
  render(){
    return(
      <div>
        <button onClick={this.mount.bind(this)}> Mount </button>
        <button onClick={this.unmount.bind(this)}> UnMount </button>
        <div id="a"></div>
      </div>
    )
  }
}

// class Input extends React.Component{
//   render(){
//     return <input type="text" onChange={this.props.Update} />
//   }
// }
//
// class Input2 extends React.Component{
//   render(){
//     return <input ref="input" type="text" onChange={this.props.Update} />
//   }
// }

// const Title = (props) => <h3> Title: {props.text} </h3>
//
// Title.propTypes = {
//   text(props, propName, component){
//     if(!(propName in props)){
//       return new Error('missing ${propName}')
//     }
//     if(props[propName].length <6){
//       return new Error('${propName} was too short')
//     }
//   }
// }
//
// App.propTypes = {
//   txt: PropTypes.string,
//   cat: PropTypes.number.isRequired
// }
//
// const Widget = (props) => <input type="text" onChange={props.update} />

export default Wrapper
