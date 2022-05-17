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


// Available Parameters
//// [[Mandatory]] - Name 
//// [[Mandatory]] - ComponentName
//// [[Mandatory]] - Tags
//// github - (link to github page for that project)
//// iconColour - (light / dark - if the github/information logo needs to be black or white)
//// information - (provide further context to project)
//// size - accepted parameter - wide (changes bootstrap lg from 6(50%) to 12(full width))
////
////



export const components = [
    {
      name:"Covid19Dashboard",
      componentName:Covid19Dashboard,
      tags:"fetch, api",
      github:"",
      iconColour:"light",
      information:"",
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
      information:"Simple Calculator is my first ever attempt at creating a calculator in javascript (never mind react). I followed a number of tutorials but for the most part I worked my through the work doing what I thought was right."
    },

    {
      name:"Slider",
      componentName:Slider,
      tags:"useEffect hook, useState hook, useRef hook, setInterval, addEventListener, resize, client height, clearInterval, if, map, image, bootstrap, " ,
      github:"https://github.com/xScottishKrissx/playground/tree/master/src/components/simpleSlider",
      information:"A very simple 2 button image slider that moves back and forwards though 3 images. Not a lot to say about this other that it's my first actual slider i've done from scratch. It's a lot easier in react than vanilla Js but I'm still quite happy with the results. I want to build on this at some point with a more advanced version so, if you're from the future, this is where it all began."
    },

    {
      name:"SimpleTodo",
      componentName:SimpleTodo,
      tags:"useState hook, useEffect hook, functional, local storage, json, parse, getItem,toggle, push, splice, setItem, conditional rendering, classList, bootstrap, lifting state, forwardRef,props, lifting props," ,
      github:"https://github.com/xScottishKrissx/playground/tree/master/src/components/simpleTodo",
      information:"This is simple to do list that lets you add, edit and remove tasks to mimic a simple CRUD."
    },

    {
      name:"LoremIpsum",
      componentName:LoremIpsum,
      tags:"useState hook, useEffect hook, json, for, randomNumber, push, map, math, floor,random, parseInt, Number, isInteger, bootstrap, form, input, conditional rendering",
      github:"https://github.com/xScottishKrissx/playground/tree/master/src/components/loremIpsum"
    },
    {
      name:"Countdown",
      componentName:Countdown,
      tags:"useState hook, useEffect hook, date, getFullYear, getMonth, getDate, getHours,toLocaleDateString, getTime,useEffect hook, setInterval, math, floor, clearInterval,bootstrap, conditional rendering",
      github:"https://github.com/xScottishKrissx/playground/tree/master/src/components/countdown" 
    },
    {
      name:"Tabs",
      componentName:Tabs,
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
      github:"https://github.com/xScottishKrissx/playground/tree/master/src/components/simpleFilter"
    },
    {
      name:"Questions",
      componentName:Questions,
      tags:"functional, useState hook, conditional rendering, map, bootstrap, toggle  ",
      github:"https://github.com/xScottishKrissx/playground/tree/master/src/components/questions" 
    },
    {
      name:"SimpleSearch Bar",
      componentName:SimpleSearchBar,
      tags:"json, props, functional, map, toggle, class list, useRef hook, bootstrap, useState hook, e target value, toLowerCase, includes, conditional rendering",
      github:"https://github.com/xScottishKrissx/playground/tree/master/src/components/simpleSearchBar" 
    },

    {
      name:"Modal",
      componentName:Modal,
      tags:"useState hook, toggle, bootstrap, toggle, conditional rendering" ,
      github:"https://github.com/xScottishKrissx/playground/tree/master/src/components/modal"
    },
    {
      name:"Sidebar",
      componentName:Sidebar,
      tags:"functional, state, useState hook, bootstrap, toggle, ternary, conditional rendering" ,
      github:"https://github.com/xScottishKrissx/playground/tree/master/src/components/sidebar"
    },
    {
      name:"ReviewCarousel",
      componentName:ReviewCarousel,
      tags:"stateful, state, randomNumber, math, floor, bootstrap, random user api, image ",
      github:"https://github.com/xScottishKrissx/playground/tree/master/src/components/reviewCarousel"
    },
    {
      name:"Counter",
      componentName:Counter,
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





