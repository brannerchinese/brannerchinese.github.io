var theDiv = document.createElement("div");
theDiv.id = "linkdiv";
object = document.createElement('object');
object.data = "CONTENT/" + pageName + ".md";
theDiv.appendChild(object);
document.body.appendChild(theDiv);

var text = "Markdown *rocks*.";
var converter = new Showdown.converter();
var html = converter.makeHtml(text);
alert(html);
