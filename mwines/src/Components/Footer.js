import React from 'react'
import {footer, Container, Row, Col} from 'react-bootstrap';

const Footer = () => {
    return (
        <footer>
          <Container>
            <Row>
              <Col className='text-center py-3'>Copyright &copy; MWINES</Col>
            </Row>
          </Container>
        </footer>
      )
    }

export default Footer
