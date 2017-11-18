class InnerApp extends Component {
    constructor(props) {
      super(props)
  
      this.state = {
        label: 'hello'
      }
    }
  
    render() {
      return (
        <div>
          <p>{ this.state.label }</p>
          <button onClick={() => this.setState({label: 'hello 2'})} >Click</button>
        </div>
      )
    }
  }