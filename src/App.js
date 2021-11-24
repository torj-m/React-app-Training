import React from "react"
import { increaseCounter, decreaseCounter, resetCounter } from "./redux/counter/counter.actions"
import { connect } from 'react-redux';
function App(props) {
  return (
    <div className="App">
      <button onClick={() => props.resetCounter()}>
        Reset
      </button>
      <div>Count: {props.count}</div>
      <button onClick={() => props.increaseCounter()}>
        Increase Count
      </button>
      <button onClick={() => props.decreaseCounter()}>
        Decrease Count
      </button>
    </div>
  )
}
const mapStateToProps = state => {
  return {
    count: state.counter.count,
  }
}
const mapDispatchToProps = dispatch => {
  return {
    increaseCounter: () => dispatch(increaseCounter()),
    decreaseCounter: () => dispatch(decreaseCounter()),
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(App)

