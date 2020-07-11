import React from 'react';

class App extends React.PureComponent { 
  divRef = undefined
  constructor(props) { 
    super(props)
    this.state = {
      n: 1,
      array: [1, 2, 3],
      width:null
    }
    this.divRef = React.createRef()
  }
  onClick = () => {
    this.setState(state => ({
      n: state.n+1
    }))

  }
  componentDidMount() { 
    // const div = document.getElementById('xxx')
    // const width = div.getBoundingClientRect().width
    // this.setState({ width })
    
    const div = this.divRef.current
    const width = div.getBoundingClientRect().width
    this.setState({width})
  }
  render() {
    return (
      
      <div ref={this.divRef}>Hellow World,{this.state.width}</div>
     
    )

  }
}
export default App;
