import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import orchildsData from '../data/orchildsData'

function ListOfOrchids() {
  return (
    <Row className="g-4">
      {orchildsData.map((orchid) => (
        <Col key={orchid.id} xs={12} sm={6} md={4} lg={3}>
          <Card className="h-100 orchid-card">
            <Card.Img
              variant="top"
              src={orchid.image}
              alt={orchid.name}
              className="orchid-card__image"
            />
            <Card.Body>
              <Card.Title>{orchid.name}</Card.Title>
              <Card.Text>{orchid.category}</Card.Text>
              <Button variant="primary">Detail</Button>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  )
}

export default ListOfOrchids
