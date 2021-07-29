/* eslint-disable prettier/prettier */
/* eslint-disable no-undef */
// http://localhost:8080/testD3/main.html

import * as d3 from "https://cdn.skypack.dev/d3@7";

var svg = d3.select('svg');
var width = svg.attr('width');
var height = svg.attr('height');
console.log('attr', width, height);


function ticked() {
    link
        .attr("x1", function (d) {
            return d.source.x;
        })
        .attr("y1", function (d) {
            return d.source.y;
        })
        .attr("x2", function (d) {
            return d.target.x;
        })
        .attr("y2", function (d) {
            return d.target.y;
        });

    node
        .attr("cx", function (d) {
            return d.x;
        })
        .attr("cy", function (d) {
            return d.y;
        });
}

var graph = {
    nodes: [
        { name: "alice", socialSecurityNumber: 0 },
        { name: "bob", socialSecurityNumber: 1 },
        { name: "chen", socialSecurityNumber: 2 },
    ],
    links: [
        { source: "alice", target: "bob" }
    ]
};

var sim = d3
    .forceSimulation(graph.nodes)
    .force(
        "link",
        d3.forceLink(graph.links).id(function (d) {
            return d.name;
        })
    )
    .force("change", d3.forceManyBody().strength(-30))
    .force("center", d3.forceCenter(width / 2, height / 2))
    .on("tick", ticked);

var link = svg
    .append("g")
    .selectAll("line")
    .data(graph.links)
    .enter()
    .append("line")
    .attr("stroke-width", function () {
        return 3;
    })
    .style("stroke", "pink");


var node = svg
    .append("g")
    .selectAll("circle")
    .data(graph.nodes)
    .enter()
    .append("circle")
    .attr("r", 5)
    .attr("fill", function () {
        return "orange";
    })
    .attr("stroke", "yellow");
