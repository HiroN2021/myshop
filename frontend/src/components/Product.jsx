import { Card } from "react-bootstrap"
import { Link } from "react-router-dom";
import Ratio from "react-bootstrap/Ratio";
import Rating from './Rating';

const Product = ({ product }) => {
    return (
        <Card className="my-3 py-3 rounded">
            <Link to={`/product/${product._id}`}>
                <Ratio aspectRatio={51 / 64}>
                    <Card.Img src={product.image} variant="top" style={{objectFit: 'contain'}} />
                </Ratio>
            </Link>

            <Card.Body>
                <Link to={`/product/${product._id}`}>
                    <Card.Title as='div' className="product-title">
                        <strong>{product.name}</strong>
                    </Card.Title>
                </Link>

                <Card.Text as="div">
                    <Rating value={product.rating} text={`${product.numReviews} reviews`} />
                </Card.Text>

                <Card.Text as="h3">${product.price}</Card.Text>
            </Card.Body>
        </Card>
    )
}

export default Product