import Ember from 'ember';
import d3 from 'd3';


var margin = {top: 20, right: 20, bottom: 30, left: 40};

export default Ember.Component.extend({
  tagName: 'svg',

  attributeBindings: 'width height chartdata'.w(),

  w: 960 - margin.left - margin.right,

  h: 500 - margin.top - margin.bottom,

  transform: "translate(" + margin.left + "," + margin.top + ")",

  width: function(){
    return this.get('w') + margin.left + margin.right;
  }.property('w'),

  height: function(){
    return this.get('h') + margin.top + margin.bottom;
  }.property('h'),  

  transformX: function(){
    return "translate(0,"+this.get('h')+")";
  }.property('h'),   

  draw: function(){
    var formatPercent = d3.format(".0%");
    var width = this.get('w');
    var height = this.get('h');
    var x = d3.scale.ordinal().rangeRoundBands([0, width], 0.1);
    var y = d3.scale.linear().range([height, 0]);
    var xAxis = d3.svg.axis().scale(x).orient("bottom");
    var yAxis = d3.svg.axis().scale(y).orient("left").tickFormat(formatPercent);
    var chartdata = this.get('chartdata');
    
    x.domain(chartdata.toArray().map(function(d) { return d.date; }));
    y.domain([0, d3.max(chartdata.toArray(), function(d) { return d.score; })]);

    d3.select("#xaxis").call(xAxis);
    d3.select("#yaxis").call(yAxis);

    d3.select("#rects").selectAll("rect").remove();
    d3.select("#rects").selectAll("rect")
      .data(chartdata.toArray())
    .enter().append("rect")
      .attr("class", "bar")
      .attr("x", function(d) { return x(d.date); })
      .attr("width", x.rangeBand())
      .attr("y", function(d) { return y(d.score); })
      .attr("height", function(d) { return height - y(d.score); });
  },

  didInsertElement: function(){
    var self = this;

    this.draw();

    setTimeout(function(){
      var w = self.get('w');
      var h = self.get('h');
      self.set('w', w+100);
      self.set('h', h+100);
    },1000);
  },

   _propertyChanged: function(){
    this.draw();
  }.observes('chartdata')
});
