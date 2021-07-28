/* eslint-disable prettier/prettier */
/* eslint-disable no-undef */
// https://observablehq.com/@d3/nested-treemap

import * as d3 from "https://cdn.skypack.dev/d3@7";

// const svg = d3.selectAll("svg");
const width = 400;
const height = 300;
// import data from "./flare-2.js";

var svg = d3.select('body')
    .append('svg')
    .attr('width', width)
    .attr('height', height);


svg.append('text')
    .text('Magic!')
    .attr('x', width / 2)
    .attr('y', 50)
    .attr('text-anchor', 'middle');

svg.selectAll('circle')
    .data([100, 130, 160, 190, 610]).enter()
    .append('circle')
    .attr('cx', function (d) { return d; })
    .attr('cy', height / 2).attr('r', 10)
    .style('fill', 'steelblue');