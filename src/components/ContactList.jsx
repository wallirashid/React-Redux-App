import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import { Table, Form, Button } from "react-bootstrap";
import { connect } from "react-redux";
import SingleContact from "./SingleContact";
import { deleteAllUser } from "../actions";
const ContactList = ({ state, deleteAllUser }) => {
  const [checkedCheckbox, setCheckedCheckbox] = useState(false);
  const contactData = state.contactData.contacts;
  console.log("Contact All dat", state.contactData.contact);
  const handleClick = () => {
    deleteAllUser(contactData);
    setCheckedCheckbox(false);
  };
  return (
    <>
      <Container>
        {contactData.length > 0 && checkedCheckbox === true ? (
          <>
            <Button variant="danger" onClick={handleClick}>
              Delete Data
            </Button>
          </>
        ) : (
          ""
        )}
        <Table responsive bordered className="mg-top-btm-60">
          <thead>
            <tr>
              <th>
                <div>
                  <Form.Group controlId="formBasicCheckbox">
                    <Form.Check
                      type="checkbox"
                      label=""
                      checked={checkedCheckbox === false ? "" : "checked"}
                      onChange={(e) => setCheckedCheckbox(!checkedCheckbox)}
                    />
                  </Form.Group>
                </div>
              </th>
              <th>Name</th>
              <th>Phone Number</th>
              <th>Email</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {contactData.map((singleContactDetail) => {
              return (
                <SingleContact
                  singleContactDetail={singleContactDetail}
                  key={singleContactDetail.id}
                  checkedCheckbox={checkedCheckbox}
                />
              );
            })}
          </tbody>
        </Table>
      </Container>
    </>
  );
};

const mapStateToProp = (state) => {
  console.log("State object is", state);
  return {
    state: state,
  };
};

export default connect(mapStateToProp, { deleteAllUser })(ContactList);
