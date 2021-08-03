/* eslint-disable prettier/prettier */
// import * as d3 from "https://cdn.skypack.dev/d3@7";

var svg = d3.select("svg");
var width = svg.attr("width");
var height = svg.attr("height");
console.log("start", width, height);

let simulation = null;
let links = null;
let nodes = null;
let texts = null;
let g = null;



function ticked() {

    console.log('ticked');

    texts.attr('x', d => d.x);
    texts.attr('y', d => d.y);

    nodes
        .attr("cx", d => d.x)
        .attr('cy', d => d.y)

    links
        .attr('x1', d => {
            return d.source.x
        })
        .attr('y1', d => d.source.y)
        .attr('x2', d => d.target.x)
        .attr('y2', d => d.target.y)
}

function started(event) {

    var circle = null;

    function dragged(event, d) {
        // console.log('dragged');
        circle.raise().attr("cx", d.x = event.x).attr("cy", d.y = event.y);
    }

    function ended() {
        console.log('ended');
        circle.classed("dragging");
    }

    circle = d3.select(this).classed("dragging", true);
    event.on("drag", dragged);
    event.on("end", ended);
    console.log('started', this);
}

g = {
    nodes: [{ name: "a" }, { name: "b" }, { name: "c" }, { name: "d" }],
    links: [
        { source: "a", target: "b" },
        { source: "b", target: "c" },
        { source: "d", target: "c" },
    ],
};

simulation = d3
    .forceSimulation(g.nodes)
    .force("charge", d3.forceManyBody().strength(0))
    .force("center", d3.forceCenter(width / 2, height / 2))
    .force("link", d3.forceLink(g.links).id(d => d.name))
    .on('tick', ticked);

// console.log('simulation', simulation);

links = svg
    .append("g")
    .selectAll("line")
    .data(g.links)
    .enter()
    .append("line")
    .attr("stroke-width", 3)
    .style("stroke", "orange");

nodes = svg
    .append("g")
    .selectAll("circle")
    .data(g.nodes)
    .enter()
    .append("circle")
    .attr("r", 10)
    .attr("fill", "red");

texts = svg
    .append("g")
    .selectAll("text")
    .data(g.nodes)
    .enter()
    .append("text")
    .attr("text", (d) => d.name);

nodes.call(d3.drag().on("start", started));
