import React, { useState } from "react";
import { Container, Form, Card, Button } from "react-bootstrap";
import { connect } from "react-redux";
import { AddContactDetail } from "../actions";
import { useHistory, Link } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
const AddContact = ({ AddContactDetail }) => {
  let history = useHistory();
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  const [name, setName] = useState("");
  const [phoneNo, setPhoneNo] = useState("");
  const [email, setEmail] = useState("");
  const handleContactSubmission = (e) => {
    e.preventDefault();
    const contactDetail = {
      id: uuidv4(),
      name: name,
      phone: phoneNo,
      email: email,
    };
    AddContactDetail(contactDetail);
    setName("");
    setPhoneNo("");
    setEmail("");
    history.push("/");
  };
  return (
    <>
      <Container>
        <Card className="mg-top-btm-60">
          <Card.Header>
            Add Contact
            <span style={{ float: "right" }}>
              <Link to="/">
                <i className="fa fa-arrow-left" aria-hidden="true"></i> Go Back
              </Link>
            </span>
          </Card.Header>
          <Card.Body>
            <Form onSubmit={handleSubmit}>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  type="name"
                  placeholder="Enter Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </Form.Group>
              <Form.Group>
                <Form.Label>Phone Number</Form.Label>
                <Form.Control
                  placeholder="Enter Phone Number"
                  value={phoneNo}
                  onChange={(e) => setPhoneNo(e.target.value)}
                />
              </Form.Group>
              <Form.Group>
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter the Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </Form.Group>

              <Button
                variant="primary"
                type="submit"
                style={{ width: "100%" }}
                onClick={(e) => handleContactSubmission(e)}
              >
                Add Contact
              </Button>
            </Form>
          </Card.Body>
        </Card>
      </Container>
    </>
  );
};
export default connect(null, { AddContactDetail: AddContactDetail })(
  AddContact
);
