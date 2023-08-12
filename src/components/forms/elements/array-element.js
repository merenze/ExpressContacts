// array-element.js
import React, { useState } from "react";

/**
 * Get a function which updates the values stored in this array.
 * @param {object} state State of the ArrayElement.
 * @param {object} setState SetState of the ArrayElement.
 * @returns Function to update the values.
 */
const getUpdateValues = (state, setState, updateParent) => (index, value) => {
  // Update the array
  // TODO:
  // Bug: This array is, for some reason, containing only the updated phone.
  // I would expect it to contain all the (not updated) phones,
  // until the assigment at values[index] = values.
  const values = state.values.map((phone, i) => i === index ? value : phone);
  setState(prevState => ({
    ...prevState,
    values: values,
  }));
  // Write through
  updateParent(values);
};

/**
 * Add a child component to this array.
 * @param {object} state ArrayElement's state.
 * @param {object} setState ArrayElement's setState.
 * @param {object} componentType Component type stored in this ArrayElement.
 * @param {function} updateValues Function to update the values stored in this array (passed to child component).
 * @param {function} updateParent Function to write the values through to the parent form.
 */
const addComponent = (state, setState, componentType, updateValues, updateParent) => {
  const values = [
    ...state.values,
    {
        // TODO set default without magic values
      type: "mobile",
      number: ""
    }
  ];
  // Set the Array
  setState(prevState => ({
    components: [
      ...prevState.components,
      React.createElement(componentType, {
        key: prevState.components.length,
        index: prevState.components.length,
        updateParentArray: updateValues,
      }),
    ],
    values: values,
  }));
  // Write through
  updateParent(values);
};

/**
 * Remove a child component from this array.
 * @param {object} state ArrayElement's state.
 * @param {function} setState ArrayElement's setState.
 * @param {number} index Index of the component to remove.
 */
const removeComponent = (state, setState, index) => {
  setState(prevState => ({
    components: prevState.components.filter((component, i) => i !== index),
    values: prevState.values.filter((value, i) => i !== index),
  }));
};

/**
 * Subcomponent to delete an associated entry.
 * @param {object} props
 * @returns DeleteEntryElement component.
 */
const DeleteEntryElement = ({ state, setState, index }) => {
  // TODO Make this prettier
  return (
    <button
      className="btn btn-large btn-danger"
      onClick={() => removeComponent(state, setState, index)}
    >
      [x]
    </button>
  );
};

/**
 * Default export.
 * @param {*} props
 * @returns ArrayElement
 */
export default function ArrayElement({ label, componentType, updateParent }) {
  // TODO validate props
  const [state, setState] = useState({
    components: [],
    values: [],
  });

  const updateValues = getUpdateValues(state, setState, updateParent);

  return (
    <React.Fragment>
      <div className="row">
        {state.components.length <= 0 ? "" : <label>{label}</label>}
        <table className="table table-hover">
          <tbody>
            {state.components.map((component, index) => (
              <tr>
                <td>
                  <div className="row">
                    <div className="col-11">{component}</div>
                    <div className="col mt-auto">
                      <DeleteEntryElement
                        key={index}
                        index={index}
                        state={state}
                        setState={setState}
                      />
                    </div>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="row">
        <div className="col-10"></div>
        <div className="col">
          <button
            type="button"
            onClick={() => addComponent(state, setState, componentType, updateValues, updateParent)}
            className="btn btn-primary form-control"
          >
            Add {label}
          </button>
        </div>
      </div>
    </React.Fragment>
  );
}
