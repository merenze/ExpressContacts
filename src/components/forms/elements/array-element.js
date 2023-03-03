import React, { useState } from "react";

export default function ArrayElement({
  label,
  componentType,
  childProps = {},
}) {
  const [state, setState] = useState({ components: [] });

  const addComponent = () => {
    console.log("Click!");
    setState((prevState) => ({
      components: [
        ...prevState.components,
        React.createElement(componentType, {
          ...childProps,
          index: prevState.components.length,
        }),
      ],
    }));
  };

  const removeComponent = (index) => {
    setState((prevState) => ({
      components: prevState.components.filter((component, i) => i !== index),
    }));
  };

  const DeleteEntryElement = ({ index }) => {
    // TODO Make this prettier
    return (
      <button
        className="btn btn-large btn-danger"
        onClick={() => removeComponent(index)}
      >
        [x]
      </button>
    );
  };

  return (
    <React.Fragment>
      <div className="row">
        {state.components.length <= 0 ? "" : <label>{label}</label>}
        <table className="table table-hover">
          <tbody>
            {state.components.map((component, index) => (
              <tr>
                <td>
                  <div class="row">
                    <div class="col-11">{component}</div>
                    <div class="col">
                      <DeleteEntryElement key={index} index={index} />
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
            onClick={() => addComponent()}
            className="btn btn-primary form-control"
          >
            Add {label}
          </button>
        </div>
      </div>
    </React.Fragment>
  );
}
