export default function displayRegion(regionCode) {
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
  const i = regionCodes.indexOf(regionCode);
  return regions[i] || "";
}
