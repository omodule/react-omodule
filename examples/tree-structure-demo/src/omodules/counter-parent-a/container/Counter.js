import React, { Component } from 'react'
import { connect } from 'react-redux'
import { increment, decrement } from '../reducer/index.js'

@connect(
    state => {
        return {
            value: state[__onamespace]
        }
    },
    dispatch => {
        return {
            increment: increment(dispatch),
            decrement: decrement(dispatch)
        }
    }
)
export default class Counter extends Component {
    render() {
        return (
            <div>
                <p>
                    <a href="#">回到首页</a>
                </p>
                <p>__onamespace: {__onamespace}</p>
                <p>
                    Clicked: {this.props.value} times
                    <button onClick={this.props.increment}>+</button>
                    <button onClick={this.props.decrement}>-</button>
                </p>
            </div>
        )
    }
}
