console.log("Hejsa fra Kristians script");

const svgns = "http://www.w3.org/2000/svg";


function drawBox(x, y, width, height, color = "red") {
  console.log("At tegne en boks");
  const svgElement = document.getElementById("grafik");
  const rect = document.createElementNS(svgns, "rect");
  rect.setAttributeNS(null, "x", x);
  rect.setAttributeNS(null, "y", y);
  rect.setAttributeNS(null, "height", width);
  rect.setAttributeNS(null, "width", height);
  rect.setAttributeNS(null, "fill", color);
  svgElement.appendChild(rect);
}