var pitchforkBase=[
  "--|-[",
  "---&gt;{",
  "---¤",
  "",
  ""
];

var nameBase=[
  "PicturElements Special",
  "Flower Petal",
  "Lexby-Mace",
  "",
  ""
];

var descBase=[
  "MUH PITCHFORK",
  "MUH SECOND PITCHFORK",
  "A mace specifically made for hunting OP. With its short and leather-covered handle you will never lose grip of this majestic creation.",
  "",
  ""
];

var descAbridgedBase=[
  "A neat block design with sharp edges. It can be used to stab and hit like a hammer!",
  "Proud like a little flower, this pitchfork stands out against the rest.",
  "A mace specifically made for hunting OP.",
  "",
  ""
];

var userBase=[
  "PicturElements",
  "PicturElements",
  "DNAnf",
  "",
  "",
  "",
  ""
]

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

function getUser(inp){
  return userBase[inp];
}
