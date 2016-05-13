var pitchforkBase=[
  "--|-[",
  "---&gt;{",
  "&#9961",
  "---¤",
  "",
  ""
];

var nameBase=[
  "PicturElements Special",
  "Flower Petal",
  "TEST",
  "Lexby-Mace",
  "",
  ""
];

var descBase=[
  "MUH PITCHFORK",
  "MUH SECOND PITCHFORK",
  "MUH THRID TEST",
  "A mace specifically made for hunting OP. With its short and leather-covered handle you will never lose grip of this majestic creation.",
  "",
  ""
];

var descAbridgedBase=[
  "A neat block design with sharp edges. It can be used to stab and hit like a hammer!",
  "Proud like a little flower, this pitchfork stands out against the rest.",
  "Lol",
  "A mace specifically made for hunting OP.",
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
