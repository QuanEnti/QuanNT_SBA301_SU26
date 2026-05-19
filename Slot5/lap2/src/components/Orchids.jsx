import { useState } from 'react'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import Modal from 'react-bootstrap/Modal'
import Row from 'react-bootstrap/Row'
import { OrchidsData } from '../shared/ListOfOrchidss'

function Orchids() {
  const [show, setShow] = useState(false)
  const [selectedOrchid, setSelectedOrchid] = useState(null)

  const handleClose = () => setShow(false)

  const handleShow = (orchid) => {
    setSelectedOrchid(orchid)
    setShow(true)
  }

  return (
    <Container className="py-4">
      <Row className="g-4">
        {OrchidsData.map((orchid) => (
          <Col key={orchid.id} xs={12} sm={6} md={4} lg={3}>
            <Card className="h-100 orchid-card">
              <Card.Img
                variant="top"
                src={orchid.image}
                alt={orchid.orchidName}
                className="orchid-card__image"
              />
              <Card.Body>
                <Card.Title>{orchid.orchidName}</Card.Title>
                <Card.Text className="text-muted mb-2">{orchid.category}</Card.Text>
                <Button variant="primary" onClick={() => handleShow(orchid)}>
                  Detail
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

      <Modal show={show} onHide={handleClose} centered dialogClassName="orchid-detail-modal">
        <Modal.Header closeButton>
          <Modal.Title>
            {selectedOrchid ? selectedOrchid.orchidName : 'Orchid detail'}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {selectedOrchid ? (
            <div className="orchid-detail">
              <img
                src={selectedOrchid.image}
                alt={selectedOrchid.orchidName}
                className="orchid-detail__image"
              />
              <p className="orchid-detail__description mb-0">
                {selectedOrchid.description}
              </p>
            </div>
          ) : null}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  )
}

export default Orchids
