var pitchforkBase=[
  "--|-[",
  "--->{",
  "",
  "",
  "",
  ""
];

var nameBase=[
  "PicturElements Special",
  "Flower Petal",
  "",
  "",
  "",
  ""
];

var descBase=[
  "MUH PITCHFORK",
  "MUH SECOND PITCHFORK",
  "",
  "",
  "",
  ""
];

var descAbridgedBase=[
  "A neat block design with sharp edges. It can be used to stab and hit like a hammer!",
  "Proud like a little flower, this pitchfork stands out against the rest.",
  "",
  "",
  "",
  ""
];

function getArrayLength(){
  return pitchforkBase.length;
}

function getPitchfork(inp){
  return pitchforkBase[inp];
}

function getItemName(inp){
  return nameBase[inp];
}

function getItemDesc(inp){
  return descBase[inp];
}

function getAbridgedItemDesc(inp){
  return descAbridgedBase[inp];
}
