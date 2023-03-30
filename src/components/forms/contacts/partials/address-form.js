import React from "react";

import TextElement from "../../elements/text-element";

const usStates = [
  "AL",
  "AK",
  "AZ",
  "AR",
  "CA",
  "CO",
  "CT",
  "DE",
  "FL",
  "GA",
  "HI",
  "ID",
  "IL",
  "IN",
  "IA",
  "KS",
  "KY",
  "LA",
  "ME",
  "MD",
  "MA",
  "MI",
  "MN",
  "MS",
  "MO",
  "MT",
  "NE",
  "NV",
  "NH",
  "NJ",
  "NM",
  "NY",
  "NC",
  "ND",
  "OH",
  "OK",
  "OR",
  "PA",
  "RI",
  "SC",
  "SD",
  "TN",
  "TX",
  "UT",
  "VT",
  "VA",
  "WA",
  "WV",
  "WI",
  "WY",
];

const UsStateSelect = () => {
  return (
    <React.Fragment>
      <label for="state">State</label>
      <select name="state" id="select-state" className="form-control">
        {usStates.map((state) => (
          <option key={state} value={state}>
            {state}
          </option>
        ))}
      </select>
    </React.Fragment>
  );
};

export default function AddressForm({}) {
  return (
    <React.Fragment>
      <div class="row">
        <TextElement name="line1" label="Line 1" />
        <TextElement name="line2" label="Line 2" />
      </div>
      <div class="row">
        <div class="col-11">
          <TextElement name="city" label="City" />
        </div>
        <div class="col mt-auto">
          <UsStateSelect />
        </div>
      </div>
    </React.Fragment>
  );
}
