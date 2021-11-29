var opts = {
    angle: 0, // The span of the gauge arc
    lineWidth: 0.44, // The line thickness
    radiusScale: 1, // Relative radius
    pointer: {
      length: 0.49, // // Relative to gauge radius
      strokeWidth: 0.051, // The thickness
      color: '#FFDE5C' // Fill color
    },
    limitMax: false,     // If false, max value increases automatically if value > maxValue
    limitMin: false,     // If true, the min value of the gauge will be fixed
    colorStart: '#6FADCF',   // Colors
    colorStop: '#8FC0DA',    // just experiment with them
    strokeColor: '#E0E0E0',  // to see which ones work best for you
    generateGradient: true,
    highDpiSupport: true,     // High resolution support
    // renderTicks is Optional
    renderTicks: {
      divisions: 9,
      divWidth: 2.8,
      divLength: 0.24,
      divColor: '#333333',
      subDivisions: 0,
      subLength: 0,
      subWidth: 0.6,
      subColor: '#666666'
    }
    
  };
  var target = document.getElementById('foo'); // your canvas element
  var gauge = new Gauge(target).setOptions(opts); // create sexy gauge!
  gauge.maxValue = 3000; // set max gauge value
  gauge.setMinValue(0);  // Prefer setter over gauge.minValue = 0
  gauge.animationSpeed = 37; // set animation speed (32 is default value)
  gauge.set(1875); // set actual value








//   code 2
var trace1= {
    hole: 0.4, 
    type: 'pie', 
    marker: {
      colors: ['', '', '', '', '', '', '', '', '', 'white'], 
      hoverinfo: 'label', 
      labelssrc: 'bigpimpatl:3:6a9398', 
      labels: ['0-1', '1-2', '2-3', '3-4', '4-5', '5-6', '6-7', '7-8', '8-9']
    }, 
    textsrc: 'bigpimpatl:3:3b66ba', 
    text: ['0-1', '1-2', '2-3', '3-4', '4-5', '5-6', '6-7', '7-8', '8-9'], 
    rotation: 90, 
    textinfo: 'text', 
    direction: 'clockwise', 
    valuessrc: 'bigpimpatl:3:05daaa', 
    values: [9, 9, 9, 9, 9, 9, 9, 9, 9, 81], 
    showlegend: false, 
    textposition: 'inside'
  };
  data = [trace1];
  layout = {
    title: 'Chart', 
    xaxis: {
      range: [-1, 1], 
      visible: false
    }, 
    yaxis: {
      range: [-1, 1], 
      visible: false
    }, 
    shapes: [
      {
        x0: 0.5, 
        x1: 0.6, 
        y0: 0.5, 
        y1: 0.6, 
        line: {
          color: 'black', 
          width: 3
        }, 
        type: 'line'
      }
    ], 
    autosize: true
  };
  
    // var data = [tracedata3];
    Plotly.newPlot('gauge', data, layout);
  // };



//   code 3:

function build_gauge(item){
  var tracedata3 = [
    {
        mode: "gauge",
        type: "indicator",
        value: item,

        gauge: {
            shape: "angular",
            bar: {
                color: "blue",
                line: {
                    color: "red",
                    width: 4
                },  
                thickness: 0
            },
            bgcolor: "#388",
            bordercolor: "#a89d32",
            borderwidth: 3,
            axis: {
                range: [0,9],
                visible: true,
                tickmode: "array",
                tickvals: [0,1,2,3,4,5,6,7,8,9],
                ticks: "inside"
            },
            steps: [
                {range: [0, 1],color: "rgba(0,105,11,.5)"},
                {range:[1,2], color: "rgba(10,120,22,.5)"},
                {range:[2,3], color:"rgba(10,120,22,.5)" },
                {range:[3,4], color: "rgba(10,120,22,.5)"},
                {range:[4,5], color:"rgba(10,120,22,.5)" },
                {range:[5,6], color:"rgba(10,120,22,.5)" },
                {range:[6,7], color:"rgba(10,120,22,.5)" },
                {range:[7,8], color:"rgba(10,120,22,.5)" },
                {range:[8,9], color: "rgba(10,120,22,.5)"}
            ]
        }
    }
  ];

var theta = 93.5
var r = 0.7
var x_head = r * Math.cos(Math.PI/180*theta)
var y_head = r * Math.sin(Math.PI/180*theta)

let layout = {
  xaxis: {range: [-1, 1], showgrid: false, 'zeroline': false, 'visible': false},
  yaxis: {range: [-1, 1], showgrid: false, 'zeroline': false, 'visible': false},
  showlegend: false,
  annotations: [
    {
      ax: 0.5,
      ay: 0,
      axref: 'x',
      ayref: 'y',
      x: 0.5+x_head,
      y: y_head,
      xref: 'x',
      yref: 'y',
      showarrow: true,
      arrowhead: 9,
    }
  ]
};