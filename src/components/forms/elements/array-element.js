import React, { useState } from "react";

/**
 * Get a function which updates the values stored in this array.
 * @param {object} state State of the ArrayElement.
 * @param {object} setState SetState of the ArrayElement.
 * @returns Function to update the values.
 */
const getUpdateValues = (state, setState, updateParent) => (index, value) => {
  console.log(`Updating ${index} with:`);
  console.log(value);
  // Update the array
  const values = [...state.values];
  values[index] = value;
  setState(prevState => ({
    ...prevState,
    values: values
  }));
  // Update the parent
  updateParent(values);
};

/**
 * Add a child component to this array.
 * @param {object} state ArrayElement's state.
 * @param {object} setState ArrayElement's setState.
 */
const addComponent = (state, setState, componentType, updateParent) => {
  // Set the Array
  setState({
    components: [
      ...state.components,
      React.createElement(componentType, {
        key: state.components.length,
        index: state.components.length,
        updateParentArray: getUpdateValues(state, setState, updateParent),
      }),
    ],
    values: [
      ...state.values,
      {},
    ],
  });
}

/**
 * Remove a child component from this array.
 * @param {object} state ArrayElement's state.
 * @param {function} setState ArrayElement's setState.
 * @param {number} index Index of the component to remove.
 */
const removeComponent = (state, setState, index) => {
  setState({
    components: state.components.filter((component, i) => i !== index),
    values: state.values.filter((value, i) => i !== index),
  });
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
            onClick={() => addComponent(state, setState, componentType, updateParent)}
            className="btn btn-primary form-control"
          >
            Add {label}
          </button>
        </div>
      </div>
    </React.Fragment>
  );
}
