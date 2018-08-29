import React from 'react';
import PropTypes from 'prop-types';
import {
  Row,
  Col,
  Card,
  CardText,
  CardBody,
  CardHeader,
  ListGroup,
  ListGroupItem,
} from 'reactstrap';
import { Link } from 'react-router-dom';
import ErrorMessages from '../../../misc/constants/errors';
import Loading from '../../../web/components/Loading';
import Error from '../../../web/components/Error';

const GarmentView = ({
  error,
  loading,
  garments,
  garmentId,
}) => {
  // Loading
  if (loading) return <Loading />;

  // Error
  if (error) return <Error content={error} />;

  // Get this Garment from all garments
  let garment = null;
  if (garmentId && garments) {
    garment = garments.find(item => parseInt(item.id, 10) === parseInt(garmentId, 10));
  }

  // Garment not found
  if (!garment) return <Error content={ErrorMessages.garment404} />;

  // Build Ingredients listing
  const ingredients = garment.ingredients.map(item => (
    <ListGroupItem key={`${item}`}>{item}</ListGroupItem>
  ));

  // Build Method listing
  const method = garment.method.map(item => (
    <ListGroupItem key={`${item}`}>{item}</ListGroupItem>
  ));

  return (
    <div>
      <Row>
        <Col sm="12">
          <h1>{garment.title}</h1>
          <p>by {garment.author}</p>
        </Col>
      </Row>
      <Row>
        <Col lg="4" className="garment-view-card">
          <Card>
            <CardHeader>About this garment</CardHeader>
            <CardBody>
              <CardText>{garment.body}</CardText>
            </CardBody>
          </Card>
        </Col>
        <Col lg="4" className="garment-view-card">
          <Card>
            <CardHeader>Ingredients</CardHeader>
            <ListGroup className="list-group-flush">
              {ingredients}
            </ListGroup>
          </Card>
        </Col>
        <Col lg="4" className="garment-view-card">
          <Card>
            <CardHeader>Method</CardHeader>
            <ListGroup className="list-group-flush">
              {method}
            </ListGroup>
          </Card>
        </Col>
      </Row>
      <Row className="pb-3">
        <Col sm="12">
          <Link className="btn btn-secondary" to="/garments"><i className="icon-arrow-left" /> Back</Link>
        </Col>
      </Row>
    </div>
  );
};

GarmentView.propTypes = {
  error: PropTypes.string,
  loading: PropTypes.bool.isRequired,
  garmentId: PropTypes.string.isRequired,
  garments: PropTypes.arrayOf(PropTypes.shape()).isRequired,
};

GarmentView.defaultProps = {
  error: null,
};

export default GarmentView;
