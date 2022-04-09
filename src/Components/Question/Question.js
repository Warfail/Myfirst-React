import React from 'react'
import { Button, Col, Container, Form, FormGroup, Input, Label, Row } from 'reactstrap'
import './Question.css'


export const Question = () => {
    return (
        <Container
        xs="auto"
      fluid="sm"
        >
            <Row>
    <Col
      className="mt-5 mb-2 bg-light border"
      
      >

          <div className="container">
        <Form>
        <FormGroup>
          <Label for="exampleEmail">
            Email
          </Label>
          <Input
            id="exampleEmail"
            name="email"
            placeholder="masukan Email anda"
            type="email"
          />
        </FormGroup>
        <FormGroup>
          <Label for="exampleText">
            Silahkan Taruh Pertanyaan anda
          </Label>
          <Input
            id="exampleText"
            name="text"
            type="textarea"
          />
        </FormGroup>
        <Button>
          Kirim
        </Button>
      </Form>
      </div>
      </Col>
  
  </Row>
      </Container>
    )
}
