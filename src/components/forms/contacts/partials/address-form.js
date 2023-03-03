import React from "react";

import TextElement from "../../elements/text-element";

export default function AddressForm({}) {
  return (
    <React.Fragment>
      <div class="row">
        <div class="col-8">
          <TextElement label="Line 1" />
          <TextElement label="Line 2" />
        </div>
        <div class="col">
          <TextElement label="City" />
          <TextElement label="State" />
        </div>
      </div>
    </React.Fragment>
  );
}
