// ploting function

// default initial display which is id 940



function getplot(id) {
    d3.json("samples.json").then (sampledata =>{
    console.log(sampledata);

    var samples=sampledata.samples.filter(sample => sample.id===id)[0];
    console.log(samples);

    var sample_values=samples.sample_values.slice(0,10).reverse();
    console.log(sample_values);
    
    var otu_id=(samples.otu_ids.slice(0,10).reverse()).map(d=>'OTU' +d);
    console.log(otu_id);

    var otu_labels=samples.otu_labels.slice(0,10).reverse();
    console.log(otu_labels);

    var trace1={
      x:sample_values,
      y:otu_id,
      text:otu_labels,
      type:'bar',
      marker:{color:'#FF7800'},
      orientation:'h'
    };

    var tracedata=[trace1];

    var layout={
      title:'Top 10 OTU in sampels',
      font:{
        family: 'Raleway, sans-serif'
      },
      margin:{
        l:80,
        r:50,
        t:50,
        b:20
      },
      hovermode: "closest"
    };

    Plotly.newPlot("bar", tracedata, layout);

    var trace2={
      x:samples.otu_ids,
      y:samples.sample_values,
      mode:'markers',
      marker:{
        size:samples.sample_values,
        color:samples.otu_ids
      },
      text:samples.otu_labels
    };

    var tracedata2=[trace2];

    var layout2={
      xaxis:{title:'OTU ID'},
      hovermode:'closest'
    };

    Plotly.newPlot('bubble',tracedata2,layout2);

});
};


function build_gauge(data){
var tracedata3= {
  hole: 0.4, 
  type: 'pie', 
  marker: {
    colors: ["rgba(0,105,11,.5)",
    "rgba(10,120,22,.5)",
    "rgba(14,127,0,.5)",
    "rgba(110,154,22,.5)",
    "rgba(170,202,42,.5)",
    "rgba(202,209,95,.5)",
    "rgba(210,206,145,.5)",
    "rgba(232,226,202,.5)",
    "rgba(240, 230,215,.5)",
    "rgba(255,255,255,0)"], 
    hoverinfo: 'label', 
    labels: ['0-1', '1-2', '2-3', '3-4', '4-5', '5-6', '6-7', '7-8', '8-9']
  }, 
  text: ['0-1', '1-2', '2-3', '3-4', '4-5', '5-6', '6-7', '7-8', '8-9'], 
  rotation: 90, 
  textinfo: 'text', 
  direction: 'clockwise',  
  values: [9, 9, 9, 9, 9, 9, 9, 9, 9, 81], 
  showlegend: false, 
  textposition: 'inside'
};



var angle = parseFloat(data) * 20;

    
    var degrees = 180 - angle;
    var radius = 0.5; 
    var radians = (degrees * Math.PI) / 180;
    var x = radius * Math.cos(radians);
    var y = radius * Math.sin(radians);

    var mainPath = "M-.0 -0.05 L  .0 0.05 L";
    var pathX = String(x);
    var space = " ";
    var pathY = String(y);
    var pathEnd = " Z";
    var path = mainPath.concat(pathX, space, pathY, pathEnd);
    console.log(path);

var layout = {
    title: "Belly Button Washing Frequency <br> Scrubs per Week" ,
    xaxis: {
      zeroline:false,
      showticklabels: false,
      showgrid: false,
      range: [-1, 1]
      },
    yaxis: {
      zeroline: false,
      showticklabels: false,
      showgrid: false,
      range: [-1, 1]},
    shapes: [
      {
        type: "path",
        path: path,
        fillcolor: "850000",
        line: {
        color: "850000"
        }, 
      }
    ], 
    height: 500,
    width: 500,
  };

  var data = [tracedata3];
  Plotly.newPlot('gauge', data, layout);};



// demographi info function


function get_demo(id){
    d3.json("samples.json").then (sampledata =>{
    console.log(sampledata);

    var filtered_demo_info=sampledata.metadata.filter(d=> d.id === parseInt(id))[0];
    console.log(filtered_demo_info);

    var demoinfo = d3.select("#sample-metadata");
    demoinfo.html('');

    Object.entries(filtered_demo_info).forEach(function([key, value]) {
      console.log(key, value);
      demoinfo
      .append('h5')
      .text(`${key}:${value}`);
      
});
    console.log(filtered_demo_info.wfreq);
    build_gauge(filtered_demo_info.wfreq);
});
};


// // select dropdown menu
function init(){
d3.json("samples.json").then (sampledata =>{
  console.log(sampledata);
  var dropdown=d3.select('#selDataset');
  
  sampledata.names.forEach(name=> {
    dropdown
    .append('option')
    .text(name)
    });

getplot('940');
get_demo('940');

});};



function optionChanged() {
  var selected_sample=d3.select('#selDataset').property('value');
  console.log(selected_sample);

  getplot(selected_sample);
  get_demo(selected_sample);
};

init();