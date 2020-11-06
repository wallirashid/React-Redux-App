import React, { useState, useEffect } from "react";
import { Container, Form, Card, Button } from "react-bootstrap";
import { connect } from "react-redux";
import { useSelector } from "react-redux";
import { useHistory, Link, useParams } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import { getSingleUser, updateContact } from "../actions";
const EditContact = ({
  AddContactDetail,
  getSingleUser,
  singleUserData,
  updateContact,
}) => {
  console.log("Single user data--------------", singleUserData.contact);
  let { id } = useParams();
  let history = useHistory();
  let contact = useSelector((state) => state.contactData.contact);
  const [name, setName] = useState("");
  const [phoneNo, setPhoneNo] = useState("");
  const [email, setEmail] = useState("");
  useEffect(() => {
    getSingleUser(id);
    if (contact !== null) {
      setName(contact.name);
      setPhoneNo(contact.phone);
      setEmail(contact.email);
    }
  }, [contact]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const updated_data = Object.assign(contact, {
      id: id,
      name: name,
      phone: phoneNo,
      email: email,
    });
    updateContact(updated_data);
    history.push("/");
  };
  return (
    <>
      <Container>
        <Card className="mg-top-btm-60">
          <Card.Header>
            Update Contact
            <span style={{ float: "right" }}>
              <Link to="/">
                <i className="fa fa-arrow-left" aria-hidden="true"></i> Go Back
              </Link>
            </span>
          </Card.Header>

          <Card.Body>
            <Form onSubmit={(e) => handleSubmit(e)}>
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
                onClick={(e) => handleSubmit(e)}
              >
                Update Contact
              </Button>
            </Form>
          </Card.Body>
        </Card>
      </Container>
    </>
  );
};
const mapStateToProp = (state) => {
  return {
    singleUserData: state.contactData,
  };
};

export default connect(mapStateToProp, { getSingleUser, updateContact })(
  EditContact
);
