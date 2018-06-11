import React from 'react';
import PropTypes from 'prop-types';
import {
  Row,
  Col,
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  Button,
} from 'reactstrap';
import { Link } from 'react-router-dom';
import Error from './Error';

const GarmentListing = ({ error, loading, garments, deleteGarment }) => {
  // Error
  console.log(garments);
  if (error) return <Error content={error} />;

  // Build Cards for Listing
  const cards = garments.map((item) => {
    if (item.id) {
      return (
        <Card key={`${item.id}`}>
          <Link to={`/garment/${item.id}`}>
            <CardImg top src={item.image} alt={item.title} />
          </Link>
          <CardBody>
            <CardTitle>{item.title}</CardTitle>
            <CardText>{item.body}</CardText>
            <Button className="btn btn-primary" onClick={() => deleteGarment(item.id)}>Delete Garment</Button>
          </CardBody>
        </Card>
      );
    }
    return null;
  });

  // Show Listing
  return (
    <div>
      <Row>
        <Col sm="12">
          <h1>Garments</h1>
          <p>The following data is read directly from Firebase.</p>
        </Col>
      </Row>
      <Row className={loading ? 'content-loading' : ''}>
        <Col sm="12" className="card-columns">
          {cards}
        </Col>
      </Row>
    </div>
  );
};

GarmentListing.propTypes = {
  error: PropTypes.string,
  loading: PropTypes.bool.isRequired,
  garments: PropTypes.arrayOf(PropTypes.shape()).isRequired,
  deleteGarment: PropTypes.func.isRequired,
};

GarmentListing.defaultProps = {
  error: null,
};

export default GarmentListing;
