import React from "react";

export default function SelectRegion(props) {
  const regions = [
    "Pacific",
    "New York City",
    "New England",
    "Upper Midwest",
    "Midwest",
    "Plains",
    "Southeast",
    "South",
    "Southwest",
    "Mountain"
  ];
  const regionCodes = [
    "pa",
    "ny",
    "ne",
    "um",
    "mw",
    "pl",
    "se",
    "s",
    "sw",
    "mt"
  ];
  const regionOptions = regionCodes.map((region, i) => {
    if (region === props.region) {
      return (
        <option value={region} key={i} selected>
          {regions[i]}
        </option>
      );
    }
    return (
      <option value={region} key={i}>
        {regions[i]}
      </option>
    );
  });
  return (
    <select id="region" name="region">
      <option>Set your region</option>
      {regionOptions}
    </select>
  );
}
