var pitchforkBase=[
  "--|-[",
  "---&gt;{",
  "&#9961",
  "",
  "",
  ""
];

var nameBase=[
  "PicturElements Special",
  "Flower Petal",
  "TEST",
  "",
  "",
  ""
];

var descBase=[
  "MUH PITCHFORK",
  "MUH SECOND PITCHFORK",
  "MUH THRID TEST",
  "",
  "",
  ""
];

var descAbridgedBase=[
  "A neat block design with sharp edges. It can be used to stab and hit like a hammer!",
  "Proud like a little flower, this pitchfork stands out against the rest.",
  "Lol",
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
