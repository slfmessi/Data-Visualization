var Converter = require("csvtojson").Converter;
var converter = new Converter({});

var jsonfile = require("jsonfile");
var file = "./raw/test.json"

var output = {"nodes": [], "links": []};

converter.on("end_parsed", function (jsonArray) {
  // console.log(jsonArray);
  // TODO: format jsonArray
  // console.log(jsonArray);
  var sourceIdList = [];
  for (var item in jsonArray) {
    if (sourceIdList.indexOf(jsonArray[item].FromNodeId) == -1) {
      sourceIdList.push(jsonArray[item].FromNodeId);
      output.nodes.push({"name": jsonArray[item].FromNodeId, "value": 1});
    }
    output.links.push({"source": jsonArray[item].FromNodeId, "target": jsonArray[item].ToNodeId});
  }
  // console.log(output.links);
  jsonfile.writeFile(file, output, function (err) {
    console.error(err);
  })
});

require("fs").createReadStream("raw/Wiki-Vote.csv").pipe(converter);