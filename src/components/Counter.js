import React from "react";
import {Button} from "react-bootstrap";

class Counter extends React.Component {
    state={
        num : 0
    }
    
    increaseNum=()=>{
        this.setState({
            num : (this.state.num)+1
        })
    };

    DecreaseNum=()=>{
        this.setState({
            num : (this.state.num)-1
        })
    }

    render() {
        return(
            <div className="text-center mb-5">
                <Button onClick={this.increaseNum} variant="success" className="mx-5 fw-bold fs-5 px-4 py-2">Increase</Button>
                <Button onClick={this.DecreaseNum} variant="danger" className="mx-5 fw-bold fs-5 px-4 py-2">Decrease</Button>
                <span className="mx-5 fw-bold fs-5 px-4 py-2" style={{border: '1px solid black'}}>{this.state.num}</span>
            </div>
        )
    }
}

export default Counter;