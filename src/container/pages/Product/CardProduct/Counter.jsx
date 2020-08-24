import React, { Component } from 'react';
import { connect } from 'react-redux';
import actionType from '../../../../redux/GlobalActionType';
import { GlobalConsumer } from '../../../../context/context';

class Counter extends Component {
    // state = {
    //     order: 4
    // }

    // handleCounterChange = (newValue) => {
    //     this.props.onCounterChange(newValue);
    // }

    // props.handlePlus = () => {
    //     this.setState({
    //         order: this.state.order + 1
    //     }, () => {
    //         this.handleCounterChange(this.state.order);
    //     })
    // }

    // handleMinus = () => {
    //     if (this.state.order > 0) {
    //         this.setState({
    //             order: this.state.order - 1
    //         }, () => {
    //             this.handleCounterChange(this.state.order);
    //         })
    //     }
    // }

    // render() {
    //     return (
    //         <div className="counter">
    //             <button className="minus" onClick={this.props.handleMinus}>-</button>
    //             <input type="text" value={this.props.order} />
    //             <button className="plus" onClick={this.props.handlePlus}>+</button>
    //         </div>
    //     )
    // }
    render() {
        console.log(this);
        return (
            <div className="counter">
                <button className="minus" onClick={() => this.props.dispatch({ type: 'MINUS_ORDER' })}>-</button>
                <input type="text" value={this.props.state.totalOrder} />
                <button className="plus" onClick={() => this.props.dispatch({ type: 'PLUS_ORDER' })}>+</button>
            </div>
        )
    }
}

// const mapStateToProps = (state) => {
//     return {
//         order: state.totalOrder
//     }
// }

// const mapDispatchToProps = (dispatch) => {
//     return {
//         handlePlus: () => dispatch({ type: actionType.PLUS_ORDER }),
//         handleMinus: () => dispatch({ type: actionType.MINUS_ORDER })
//     }
// }

// export default connect(mapStateToProps, mapDispatchToProps)(Counter);
export default GlobalConsumer(Counter);