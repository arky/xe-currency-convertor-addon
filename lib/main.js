var self = require("self");

var XEpanel = require("panel").Panel({
    width: 320,
    height: 480,
    contentURL: "http://www.xe.com/currencyconverter/#converter"
});
 
 
var myWidget = require("widget").Widget({
  id: "xe",
  label: "XE Currency Converter",
  contentURL: self.data.url("xe.gif"),
  width: 16,
  height: 16,
  panel: XEpanel
 });  


