import {
  CREATE_CONTACT,
  DELETE_CONTACT,
  GET_CONTACT,
  DELETE_ALL_USER,
  UPDATE_CONTACT,
} from "./action.type";
export const AddContactDetail = (contactDetail) => {
  return {
    type: CREATE_CONTACT,
    payload: contactDetail,
  };
};
export const deleteSingleUser = (id) => {
  return {
    type: DELETE_CONTACT,
    payload: id,
  };
};
export const getSingleUser = (id) => {
  return {
    type: GET_CONTACT,
    payload: id,
  };
};

export const deleteAllUser = (data) => {
  return {
    type: DELETE_ALL_USER,
    payload: data,
  };
};
export const updateContact = (updateContact) => {
  return {
    type: UPDATE_CONTACT,
    payload: updateContact,
  };
};
