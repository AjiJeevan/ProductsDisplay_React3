import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

function Product(props){
    console.log(props.productInfo.image)
    return(
        <>
        <Card>
            <Card.Img variant="top" src={props.productInfo.image} style={{height : '300px', objectFit:'contain'}} className='mt-2' />
            <Card.Body>
                <Card.Title>{props.productInfo.title}</Card.Title>
                <Card.Text>{props.productInfo.price}</Card.Text>
                <Card.Text>{props.productInfo.description}</Card.Text>
                <Link to = {`/productdetails/${props.productInfo.id}`} >
                    <Button variant="warning" className="me-2"> VIEW </Button>
                </Link>
                <Button variant="primary">Buy Now</Button>
            </Card.Body>
        </Card>
        </>
    )
}

export default Product