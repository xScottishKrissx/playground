import SimpleCalculator from "../../simpleCalculator/simpleCalculator";
import SimpleSearchBar from "../../simpleSearchBar/simpleSearchBar";
import Slider from "../../simpleSlider/slider";
import SimpleTodo from "../../simpleTodo/simpleTodo"
import LoremIpsum from "../../loremIpsum/loremIpsum";
import Countdown from "../../countdown/countdown";
import Tabs from "../../tabs/tabs";
import SimpleVideo from "../../videoBackground/video";
import SimpleFilter from "../../simpleFilter/simpleFIlter";
import Questions from "../../questions/questions";
import Modal from "../../modal/modal"
import Sidebar from "../../sidebar/sidebar";
import ReviewCarousel from "../../reviewCarousel/reviewCarousel";
import Counter from "../../counter/counter";
import ColourFlipper from "../../colourFlipper/colourFlipper";
import SimpleApiFetch from "../../simplyApiFetch/simpleApiFetch";
import Covid19Dashboard from "../../covid19Dashboard/covid19Dashboard";
import simpleChart from "../../simpleCharts/simpleChart";
import Tbored from "../../tbored/tbored";
// import ChessTutorial from "../../simpleDragAndDrop/simpleDragDrop";
// import SimpleDragDrop from "../../simpleDragAndDrop/simpleDragDrop";
// import TaskBoard from "../../taskBoard/taskBoard";
// import Tboard from "../../tBoard/tboard";
import Taskboard3 from "../../taskBoard3/taskboard3";



// Available Parameters
//// [[Mandatory]] - Name 
//// [[Mandatory]] - ComponentName
//// [[Mandatory]] - Tags
//// github - (link to github page for that project)
//// iconColour - (light / dark - if the github/information logo needs to be black or white)
//// information - (provide further context to project)
//// size - accepted parameter - wide (changes bootstrap lg from 6(50%) to 12(full width))
//// sources - array
////



export const components = [
  {
    name:"TaskBored",
    componentName: Taskboard3,
    tags:"",
  },
  // {
  //   name:"SimpleDragandDrop",
  //   componentName:SimpleDragDrop,
  //   tags:"React Drag Drop, DnD, DnDProvider, HTML5Backend, images, useState, map, useDrop, filter, ternary formatting, inline style, onClick, useDrag,  ",
  //   github:"https://github.com/xScottishKrissx/playground/tree/master/src/components/simpleDragAndDrop",
  //   iconColour:"dark",
  //   information:"This is very basic attempt at drag and drop using the React Drag and Drop library. I wanted to give myself a solid base and understand the fundamentals before moving onto more complicated implementations.",
  //   size:"wide",
  //   sources:["React DND -> https://react-dnd.github.io/react-dnd/about", "Chess Info from -> https://www.ichess.net/blog/chess-pieces-moves/",
  //     "Chess Pieces from Google and  https://www.pngwing.com/" ]
  // },
  
    {
      name:"Covid19Dashboard",
      componentName:Covid19Dashboard,
      tags:"fetch, api, slider, then, state, destructuring, props, media queries, bootstrap, inline styles, leaflet, maps, search, local storage, useRef, setView, flyTo, animation, require, lifting props, format numbers, toString, replace, setItem, getItem, map, entries, reverse, filter, onClick, toLowerCase, onMouseDown, onMouseUp, react chart js 2, graphs, object to array, line chart, onChange, force update, ternary operator, date, toLocaleDateString, react-leaflet       ",
      github:"https://github.com/xScottishKrissx/playground/tree/master/src/components/covid19Dashboard",
      iconColour:"dark",
      information:"The Covid 19 dashboard is an escalation of SimpleChart and builds upon everything it did. There are three sections, each outputting data from an API supplied by disease.sh. You can view each country's covid data by clicking on the map marker, searching the map using the search box or the country lookup section. You can also favourite a country so that it will be the default country you see on load and when you click on the gold marker on the map. You also get graphs created with react-chartjs-2 alongside the map, built using react-leaflet, although only for certain countries due to limitations of some data from the API.",
      size:"wide",
    },
    {
      name:"SimpleChart",
      componentName:simpleChart,
      tags:"chart.js, react-chartjs-2 bootstrap, useState, useEffect, promise, fetch, json, then, object, entries, map, conditional formatting, graphs, datasets, line chart, bar chart, api,",
      github:"https://github.com/xScottishKrissx/playground/tree/master/src/components/simpleCharts",
      iconColour:"dark",
      information:"Simple charts is my first crack at the Chart.js and react-chartjs-2 library, using data from disease.sh to output vaccination data. It was a basic task but very useful to me in understanding the basics of working with graphs and charts with react.js.",
      size:"wide"
    },
    {
     name:"SimpleAPIFetch",
     componentName: SimpleApiFetch ,
     tags:"api, fetch, then, response, json, bootstrap, conditional formatting, random number, math, .floor, catch, target, ref, state, effect, lifting state, lifting props, modulo,date, time, parse, toLocaleDateString",
     github:"https://github.com/xScottishKrissx/playground/tree/master/src/components/simplyApiFetch",
     iconColour:"light",
     information:"Simple API Fetch is a task designed to re-introduce myself to .fetch and API. The task was to replicate a twitter profile using information provided by the randomuser.me API. Each time you press the refresh button at the top left, new data from the api is rendered to the page.",
    },
    {
      name:"SimpleCalculator",
      componentName:SimpleCalculator,
      tags:"useState hook, bootstrap, props, lifting state, toString, includes, if, parseFloat, conditional rendering,  " ,
      github:"https://github.com/xScottishKrissx/playground/tree/master/src/components/simpleCalculator",
      iconColour:"dark",
      information:"Simple Calculator is my first ever attempt at creating a calculator in javascript (never mind react). I followed a number of tutorials but for the most part I worked my through the work doing what I thought was right."
    },

    {
      name:"Slider",
      componentName:Slider,
      tags:"useEffect hook, useState hook, useRef hook, setInterval, addEventListener, resize, client height, clearInterval, if, map, image, bootstrap, " ,
      github:"https://github.com/xScottishKrissx/playground/tree/master/src/components/simpleSlider",
      iconColour:"dark",
      information:"A very simple 2 button image slider that moves back and forwards though 3 images. Not a lot to say about this other that it's my first actual slider i've done from scratch. It's a lot easier in react than vanilla Js but I'm still quite happy with the results. I want to build on this at some point with a more advanced version so, if you're from the future, this is where it all began."
    },

    {
      name:"SimpleTodo",
      componentName:SimpleTodo,
      tags:"useState hook, useEffect hook, functional, local storage, json, parse, getItem,toggle, push, splice, setItem, conditional rendering, classList, bootstrap, lifting state, forwardRef,props, lifting props," ,
      iconColour:"dark",
      github:"https://github.com/xScottishKrissx/playground/tree/master/src/components/simpleTodo",
      information:"This is simple to do list that lets you add, edit and remove tasks to mimic a simple CRUD."
    },

    {
      name:"LoremIpsum",
      componentName:LoremIpsum,
      tags:"useState hook, useEffect hook, json, for, randomNumber, push, map, math, floor,random, parseInt, Number, isInteger, bootstrap, form, input, conditional rendering",
      iconColour:"dark",
      github:"https://github.com/xScottishKrissx/playground/tree/master/src/components/loremIpsum"
    },
    {
      name:"Countdown",
      componentName:Countdown,
      tags:"useState hook, useEffect hook, date, getFullYear, getMonth, getDate, getHours,toLocaleDateString, getTime,useEffect hook, setInterval, math, floor, clearInterval,bootstrap, conditional rendering",
      iconColour:"dark",
      github:"https://github.com/xScottishKrissx/playground/tree/master/src/components/countdown" 
    },
    {
      name:"Tabs",
      componentName:Tabs,
      iconColour:"dark",
      tags:"useState hook, json, filter, map, conditional rendering, functional, bootstrap",
      github:"https://github.com/xScottishKrissx/playground/tree/master/src/components/tabs"
    },
    {
      name:"SimpleVideo",
      componentName:SimpleVideo,
      tags:"useRef hook, useState hook, video, pause, play, bootstrap, conditional rendering" ,
      github:"https://github.com/xScottishKrissx/playground/tree/master/src/components/videoBackground",
      iconColour:"light"
    },

    {
      name:"SimpleFilter",
      componentName:SimpleFilter,
      tags:"bootstrap, useState hook, toggle, querySelector, filter, if, conditional rendering, map, from, unshift, sort,json" ,
      github:"https://github.com/xScottishKrissx/playground/tree/master/src/components/simpleFilter",
      iconColour:"dark",
    },
    {
      name:"Questions",
      componentName:Questions,
      tags:"functional, useState hook, conditional rendering, map, bootstrap, toggle  ",
      github:"https://github.com/xScottishKrissx/playground/tree/master/src/components/questions" ,
      iconColour:"dark",
    },
    {
      name:"SimpleSearch Bar",
      componentName:SimpleSearchBar,
      tags:"json, props, functional, map, toggle, class list, useRef hook, bootstrap, useState hook, e target value, toLowerCase, includes, conditional rendering",
      github:"https://github.com/xScottishKrissx/playground/tree/master/src/components/simpleSearchBar" ,
      iconColour:"dark",
    },

    {
      name:"Modal",
      componentName:Modal,
      tags:"useState hook, toggle, bootstrap, toggle, conditional rendering" ,
      github:"https://github.com/xScottishKrissx/playground/tree/master/src/components/modal",
      iconColour:"dark",
    },
    {
      name:"Sidebar",
      componentName:Sidebar,
      tags:"functional, state, useState hook, bootstrap, toggle, ternary, conditional rendering" ,
      github:"https://github.com/xScottishKrissx/playground/tree/master/src/components/sidebar",
      iconColour:"dark",
    },
    {
      name:"ReviewCarousel",
      componentName:ReviewCarousel,
      iconColour:"dark",
      tags:"stateful, state, randomNumber, math, floor, bootstrap, random user api, image ",
      github:"https://github.com/xScottishKrissx/playground/tree/master/src/components/reviewCarousel"
    },
    {
      name:"Counter",
      componentName:Counter,
      iconColour:"dark",
      tags:"stateful, state, bootstrap",
      github:"https://github.com/xScottishKrissx/playground/tree/master/src/components/counter"
    },
    {
      name:"ColourFlipper",
      componentName:ColourFlipper,
      tags:"Stateful, for loop, state, random, clipboard, bootstrap, material",
      github:"https://github.com/xScottishKrissx/playground/tree/master/src/components/colourFlipper",
      iconColour:"light"
    },


  ]





