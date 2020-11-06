import React, { useState } from "react";
import { Form } from "react-bootstrap";
import Avatar from "react-avatar";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { deleteSingleUser } from "../actions";
const SingleContact = ({
  singleContactDetail,
  deleteSingleUser,
  checkedCheckbox,
}) => {
  const [checkbox, setCheckbox] = useState(false);
  const { name, phone, email, id } = singleContactDetail;
  return (
    <tr>
      <td>
        <div>
          <Form.Group controlId="formBasicCheckbox">
            <Form.Check
              type="checkbox"
              checked={checkedCheckbox === false ? "" : "checked"}
            />
          </Form.Group>
        </div>
      </td>
      <td>
        <Avatar name={name} size="40" round="50px" /> {name}
      </td>
      <td>{phone}</td>
      <td>{email}</td>
      <td>
        <Link to={`edit-contact${id}`}>
          <span>
            <i className="fa fa-edit"></i>
          </span>
        </Link>
        <Link to="/">
          <span>
            <i
              className="fa fa-trash"
              aria-hidden="true"
              onClick={() => deleteSingleUser(id)}
            ></i>
          </span>
        </Link>
      </td>
    </tr>
  );
};
export default connect(null, { deleteSingleUser })(SingleContact);
