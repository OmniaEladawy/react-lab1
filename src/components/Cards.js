import React from "react";
import {Card,Button} from "react-bootstrap";


class Cards extends React.Component {
    render() {
        let {title,btnTitle,img}=this.props;
        console.log(img);
        return(
          <Card className='col-4 mx-3 text-center border-2 mb-5' style={{ width: '480px' }}>
            <Card.Img variant="top" src={img} style={{ height: '300px' }}/>
            <Card.Body>
              <Card.Title className='my-3 fw-bold'>{title}</Card.Title>
              <Card.Text className='my-3'>
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
              </Card.Text>
              <Button variant="primary" className='my-3 fw-bold px-3'>{btnTitle}</Button>
            </Card.Body>
          </Card>
        )
    }
}

export default Cards;