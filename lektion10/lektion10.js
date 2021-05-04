dataset = [ 35, 5, 11, 43, 2, 25, 22, 18, 15, 13,
        11, 12, 15, 20, 18, 1, 36, 28, 3, 12 ];

// Create bars
svg.selectAll("rect")
    .data(dataset)
    .transition()
    .attr("x", function(d, i) {
        return i * (w / dataset.length);
    })
    .attr("y", function(d) {
        return h - (d * 4);
    })
    .attr("width", w / dataset.length - barPadding)
    .attr("height", function(d) {
        return d * 4;
    })
    .attr("fill", "teal");