var data = require("sdk/self").data;

var XEpanel = require("sdk/panel").Panel({
    width: 340,
    height: 552, 
    contentURL: "http://www.xe.com/currencyconverter/#converter"
});
 
 
var myWidget = require("sdk/widget").Widget({
  id: "xe",
  label: "XE Currency Converter",
  contentURL: data.url("xe.gif"),
  width: 16,
  height: 16, 
  panel: XEpanel
 });  


