// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;


// import React from "react";
// import Hello_World from "./Hello_World";

// function App() {
//   return(
//     <Hello_World />
//   );
// }

// export default App;







// import React from "react";
// import Heading from "./Components.js/Heading";
// import Para from "./Components.js/Para";
// import List from "./Components.js/List";


// function App(){
//    return(
// <> 
// <Heading />
// <Para />
// <List />
// {/* <Para /> */}
// </>
//  );
// }

// export default App;






// video 19
// import React from "react";


// function App(){
    //normally:  
//let curDate = new Date();
// dynamically:  
//new Date(year,month,day,hours,minutes,seconds,milisecs)
// let curDate = new Date(2020, 5, 5, 2);
// curDate = curDate.getHours();
// let greeting = "";
//normally:
// const cssStyle = { }; 
//dynamically:
//const cssStyle = {
 //color: 'green'
 // };

//    if(curDate >= 1 && curDate < 12){
//    greeting = "Good Morning"; 
//    cssStyle.color = "green";
//  }else if(curDate >= 12 && curDate < 19){
//   greeting = "Good Afternoon";
//   cssStyle.color = "orange";
//  }else{
//    greeting = "Good Night";
//    cssStyle.color = "black";
//  } 
// return(
//     <>
//  <div>
//   <h1>Hello Sir, <span style={cssStyle}> {greeting}</span></h1>
//  </div>
//  </>
// );
// }
// export default App;


// video 20

// const youtuber = "Rahim Pardesi";
// const favprog = "React js";
// function myName() {
//     let name = "vinod";
//     return name;
// }
// function myNames() {
//     let names = "vinods";
//     return names;
// }

// export default youtuber;
// export  {favprog, myName, myNames};



// video 21

// Ist method

// function add(value1, value2) {
//     return (value1 + value2);
// }
// function sub(value1, value2) {
//     return ( value1 - value2 ); 
//   }

//   function div(value1, value2) {
//     return ((value1 / value2 ).toFixed(2));
//   }

//   function mult(value1, value2) {
//     return (value1 * value2);
//   }
//    export  {add, sub, div, mult};


// 2nd method

// import React from "react";
// import {add,sub,div,mult} from "./Calc";

// function App(){
// return (
//     <>
//     <ul>
//     <li> Sum of two numbers is {add (40,4)} </li>
//     <li> Substraction of two number is {sub (40,4)}  </li>
//    <li> Division of two numbers is {div (40,3)}  </li>
//     <li> Multiplication of two numbers is {mult (40,4)}  </li>
//    </ul>
//     </>
// );
// }

// export default App;

 


 




// we have moved it from index file.
//video 22 (Netflix series : props or attributes)

// import React from "react";
// import ReactDOM from "react-dom";
// import Card from "./Cards";
// import "./index.css";
// import Sdata from "./Sdata";

// // console.log(Sdata[0].sname);

// // (We move this part to another file that is Cards.jsx)

// // function Card(props){
// // console.log(props);
// //   return (
// //   <>
// //     <div>
// //      <div className = "cards"> 
// //       <div className = "card">
// //       {/* <img src = "https://wallpapercave.com/wp/wp4056410.jpg" alt ="myPic" className = "card__img"/> */}
// //         <img src = {props.imgsrc} alt ="myPic" className = "card__img"/>
// //         <div className = "card__info">
// //         {/* <span className = "card__category"> A Netflix Original Series</span> */}
// //           <span className = "card__category">{props.title}</span>
// //           {/* <h3 className = "card__title">DARK</h3> */}
// //           <h3 className = "card__title">{props.sname}</h3>
// //           {/* <a href = "https://www.netflix.com/in/title/80990668?source=5" target="_blank"> */}
// //           <a href = {props.link} target="_blank">
// //              <button>Watch Now</button>
// //          </a>
// //         </div>
// //       </div>
// //        </div>  
// //     </div>
// //     {/* <input type="text" value="thapa"/> */}
// //     </>
// //     );
// // }

// // In map method these three parameters are passed but in this video we will see only one parameter)
// // function ncard(value,indexnumber,array)
// // function ncard(val){
// //   // console.log (val);
// //   return(
// //     <Card
// //   imgsrc = {val.imgsrc}
// //   title =  {val.title}
// //   sname = {val.sname}
// //   link =  {val.link}
// //   />
// //   );
// // }

// ReactDOM.render(
// <>
// <h1 className = "heading_style">List of top 5 Netflix Series in 2020</h1>
// {/* map method:  */}
// {/* {Sdata.map(ncard)} */}

// {/* fat arrow function */}
// {/* {Sdata.map(function ncard (val){
// return(
//      <Card
//     imgsrc = {val.imgsrc}
//     title =  {val.title}
//     sname = {val.sname}
//     link =  {val.link}
//      />
// );
// })} */}
 
//  {/* more simplified form of arrow function*/}
// {Sdata.map((val,index) => {
//   console.log(index);
// return(
//      <Card
//     key = {val.id}
//     imgsrc = {val.imgsrc}
//     title =  {val.title}
//     sname = {val.sname}
//     link =  {val.link}
//      />
// );
// })}




// {/* <Card
// // imgsrc="https://wallpapercave.com/wp/wp4056410.jpg"
// // title=" A Netflix Original Series" 
// // sname="DARK" 
// // link="https://www.netflix.com/in/title/80990668?source=35" 
// // className = "kuchbhi"
// imgsrc = {Sdata[0].imgsrc}
// title =  {Sdata[0].title}
// sname = {Sdata[0].sname}
// link =  {Sdata[0].link}
// /> 

// <Card 
// // imgsrc="https://www.hitc.com/static/uploads/hitcn/1816/extracurricular_netflix_780_1544944.jpg" 
// // title=" A Netflix Original Series" 
// // sname="extracurricular" 
// // link="https://www.netflix.com/in/title/80990668?source=35"
// imgsrc = {Sdata[1].imgsrc}
// title =  {Sdata[1].title}
// sname = {Sdata[1].sname}
// link =  {Sdata[1].link}
// /> 
// <Card
// // imgsrc="https://wallpapercave.com/wp/wp1917154.jpg" 
// // title=" A Netflix Original Series" 
// // sname="Stranger Things" 
// // link="https://www.netflix.com/in/title/80990668?source=35" 
// imgsrc = {Sdata[2].imgsrc}
// title =  {Sdata[2].title}
// sname = {Sdata[2].sname}
// link =  {Sdata[2].link}
// /> 
// <Card 
// imgsrc = {Sdata[3].imgsrc}
// title =  {Sdata[3].title}
// sname = {Sdata[3].sname}
// link =  {Sdata[3].link}
// />
// <Card 
// imgsrc = {Sdata[4].imgsrc}
// title =  {Sdata[4].title}
// sname = {Sdata[4].sname}
// link =  {Sdata[4].link}
// /> */}
// </>,
// document.getElementById("root"));

// // simple function v/s fat arrow function:
// // function myname(hira){

// // }
// // function myname(a,b){
// // return a+b;
// // }


// // fat function also called function expression ...we started to use it after ES6.
// // const myname = (hira) => {

// // }
// // in case of returning one line element we write fat arrow function as: It  is more simple.
// // const myname = (a,b) => a+b;

// // Till here.



//We now make it short like this
//import React from "react";
//import Card from "./Components.js/Cards";
//import Sdata from "./Components.js/Sdata";
// import Netflix from "./Components.js/Netflix";
// import Amazon from "./Components.js/Amazon";

// //video 26 (correct output except the pic is not rendered)
//const favSeries = "amazon";

//const FavS = () => {
//if(favSeries === "netflix"){
//   return(
//     <Card
//    key = {Sdata[1].id}
//    imgsrc = {Sdata[1].imgsrc}
//    title =  {Sdata[1].title}
//    sname = {Sdata[1].sname}
//    link =  {Sdata[1].link}
//     />
// );
//  return <Netflix />;
//  }else{
  //return(
  //   <Card
  //  key = {Sdata[3].id}
  //  imgsrc = {Sdata[3].imgsrc}
  //  title =  {Sdata[3].title}
  //  sname = {Sdata[3].sname}
  //  link =  {Sdata[3].link}
  //   />
//);
// return <Amazon />;
// }
// { favSeries === "netflix" ? <Netflix /> : <Amazon /> }
// };

// const App = () => (
// <>
// <h1 className = "heading_style">List of top 5 Netflix Series in 2020</h1>
// <FavS />
// </>
// );

// export default App; 






//video 25 (showing almost correct output .....before)
// import React from "react";
// import Card from "./Components.js/Cards";
// import Sdata from "./Components.js/Sdata";

// const App = () => (
// <>
//  <h1 className = "heading_style">List of top 5 Netflix Series in 2020</h1>
  
//   {Sdata.map((val,index) => {
//   console.log(index);
// return(
//      <Card
//     key = {val.id}
//     imgsrc = {val.imgsrc}
//     title =  {val.title}
//     sname = {val.sname}
//     link =  {val.link}
//      />
// );
// })}
// </>
// );

// export default App;




{/* <FavS />  */}
{/* video 27 */}
// { favSeries === "netflix" ? <Netflix /> : <Amazon /> }
// </>
// );

//export default App;







//just for checking (video 24)
// import React from "react";
// import Card from "./Components.js/Cards";
// import Sdata from "./Components.js/Sdata";

// {/* fat arrow function */}
// function App(){
// {Sdata.map(function ncard (val){
// return(
//      <>
//    <Card/>
//    <Sdata />
//    <Card
//    imgsrc = {val.imgsrc}
//    title =  {val.title}
//    sname = {val.sname}
//    link =  {val.link}
//    /> 

// </>
// );
// })}
// }
// export default App;



// //just for checking (video 24)
// import React from "react";
// import Card from "./Components.js/Cards";
// import Sdata from "./Components.js/Sdata";

// {/* fat arrow function */}
// function App(){
//  {/* more simplified form of arrow function*/}
//  {Sdata.map((val,index) => {
//   console.log(index);

// return(
//   <>
//   <Card/>
//   <Sdata />
//      <Card
//     key = {val.id}
//     imgsrc = {val.imgsrc}
//     title =  {val.title}
//     sname = {val.sname}
//     link =  {val.link}
//      />
//    </>  
// );
// })} 
// }

// export default App; 
     




//import React from "react";
//import SlotM from "./Components.js/SlotMach";
// import Matching from "./Components.js/Matching";
// import NonMatching from "./Components.js/NonMatching";
//import SlotMach from "./Components.js/SlotMach";

// we move this part to App.js to make a product.

//const SlotM = () => {
// // let x = ":smile";
// // let y = ":smile";
// // let z = ":smile";

  // let x = props.x;
  // let y = props.y;
  // let z = props.z;
//if (props.x === props.y && props.y === props.z){
//     //if (x === y && y === z){
//     // return(
//     //   <>
//     //   <div className = "slot_inner">
//     //   <h1>{x} {y} {z}</h1>
//     //   <h1> This is Matching. </h1>
//     //   <hr />
//     //   </div>
//     //   </>
//     // );
 //   return <Matching/>;
 // }

 //else{
//     // return(
//     //   <>
//     //   <div className = "slot_inner">
//     //   <h1>{x} {y} {z}</h1>
//     //   <h1> This is not Matching. </h1>
//     //   <hr />
//     //   </div>
//     //   </>
//     // ); 
    //return <NonMatching />;
  
 //}
//<SlotMach />
// }; 
//};
// const App = () => {
//   return( 
//   <>
//   <h1 className="heading_style" > 
//     🎰 Welcome to <span style = {{ fontWeight : "bold"}}> Slot Machine Game </span> 🎰
//     </h1>
    {/* <SlotM />
    </>
  );
};

export default App; */}

{/* <div className = "slotmachine">
<SlotM x=":smile" y=":smile" z=":smile" />
<hr />
<SlotM x=":smile" y=":smile" z=":smile" />
<hr />
<SlotM x=":apple" y=":banana" z=":apple"/>
<hr />
<SlotM x=":apple" y=":apple" z=":apple"/>
</div>
  </>
  );
};

export default App; */}



//repeated
// import React from "react";

// const SlotM = () => {
// let x = ":smile";
// let y = ":smile";
// let z = ":smile";

// if (x === y && y === z){
//   return(
//     <>
//     <div className = "slot_inner">
//     <h1>{x} {y} {z}</h1>
//     <h1> This is Matching. </h1>
//     <hr />
//     </div>
//     </>
//   );
// }

// };

// const App = () => {
//   return( 
//   <>
//   <h1 className="heading_style" > 
//     🎰 Welcome to <span style = {{ fontWeight : "bold"}}> Slot Machine Game </span> 🎰
//     </h1>
//     <SlotM />
//     </>
//   );
// };

// export default App;









//video 29 (emoji)

// import React from "react";

// const App = () => {
//   let x ="Hira 😄 ❤️ ";
//   //let x ="thapa 😄 ❤️ 👍";
//   //let x ="Hira 😄 ❤️ ";

// return <h1> My name is {x} </h1>;

// };

// export default App;








//video 30 (REACT HOOKS: These are introduced in React version 16.8 ,through these we can react state and lifecycle feactures in functional components as these features can only be used in class components in previous versions of React.Hooks should always be used inside react fuctions at the top level.To use hooks in react we should have the 6 or above version of node and 5.2 or above version of npm.

// import React, { useState } from "react";

// // const state = useState();
// // console.log(state);

// // // here 1 is a state.
// // let count = 1;

// // const IncNum = () => {
// //   //count++;
// //   console.log('clicked ' + count++ );
// // }

// const App = () => {
//   const state = useState();
//   //console.log(state);
//   //use state is an array that returns two items....first item is undefined which is called as state object and second item is a function called the updated function.Normally in javascripta fuction returns only one value/item but this useState function returns two items.
//  // const [count, setCount] = useState(50);
//   const [count, setCount] = useState(0);
// //count is current data, setCount is updated data, 0 in useState is initial data.So that's why we call useState as Hook in React and through hook we use state variables in functional component means that we can change the state of variables in the functional component.


// // just for understanding of array destructuring.
//   // const name = ['vi', 'no', 'd'];
//   // name[0];
//   // // Array Destructuring
//   // const [vi , no, d] = name;
//   // //or we can write:
//   // //const [name1 , name2, name3] = name;
//   // //so by this we can just write it as in console:
//   // //console.log(name1);
  


//   // here 1 is a state.
//   //let count = 1;
  
//   const IncNum = () => {
//     //count++;
//     //console.log('clicked ' + count++ );
//     //setCount(100);
//      setCount(count + 1);
//   }

//  return(
//   <>
//   {/* <h1> 0 </h1> */}
//   {/* <button> Click Me </button> */}
//   <h1> {count} </h1>
//   {/* Events : onClick(function's name)  where function's name first letter should be as its's a component. And we define this component in the form of fat arrow function. */}
//   <button onClick = {IncNum}> Click Me </button>
//   </>
//  );
// };

// export default App;








// //video 31 (Hook's challenge)
// // import React from "react";
// import React, { useState } from "react";
//  const App = () => {
//  let newTime = new Date().toLocalTimeString();
//  const [ctime, setCtime] = useState(newTime);

//   const UpdateTime = () => {
//     // newTime = new Date().toLocalTimeString();
//   //  // setCtime(newTime);
//      let newCTime = new Date().toLocalTimeString();
//       setCtime(newCTime);
//    };
//    return(
//    <>
//      {/* <h1> {newTime} </h1> */}
// <h1> {ctime} </h1> 
//  <button> Get Time </button>
//  {/* <button onClick ={UpdateTime}> Get Time </button> */}
//   </>
//  );
//  };

// export default App;




// for check 

// import React, { useState } from "react";
//  const App = () => {
//  let newTime = new Date().toLocalTimeString();
//  const [ctime, setCtime] = useState(newTime);
 

//   const UpdateTime = () => {
//      let newCTime = new Date().toLocalTimeString();
//       setCtime(newCTime);
//    };
//    return(
//    <>

// <h1> {ctime} </h1> 
// <button onClick ={UpdateTime}> Get Time </button> 
//   </>
//  );
//  };

// export default App;









// video 32

// import React from "react";
// let time = new Date().toLocaleTimeString();
// const App = () => {
//   return(
//     <>
//     <h1> {time} </h1>
//     <button> Get Time </button>
//     </>
//   );
// };

// export default App;



// import React, { useState } from "react";
 
// const App = () => {
//   let time = new Date().toLocalTimeString();
//   const[ctime,setCtime] = useState(time);

//   const UpdateTime = () => {
//     time = new Date().toLocalTimeString();
//     setCtime(time);
//   };

// // here UpdateTime is used as callback function which is called automatically due to setInterval function after 1000 msecs equal to 1 min.
// setInterval(UpdateTime, 1000);

//   return(
//     <>
//     <h1> {ctime} </h1>
//     {/* <button onClick = {UpdateTime}> Get Time </button> */}
//     </>
//   );
// };

// export default App;













// video 33 (Events in react JS.)


// import React, { useState } from "react";

// const App = () => {
//   const purple = "#8e44ad";
//   //const purple = "yellow";
//   // purple is passed directly to bg which is the current data.And when we change the data by giving some value of data to setBg , this value given is passed to bg which is current data.
//   const [bg, setBg] = useState(purple);
//   const[name,setName] = useState(" Click Me ");

//   const bgChange = () => {
//     //console.log("clicked");
//     let newBg = "#34495e";
//     setBg(newBg);
//     setName("Ouch!! 🐺");
//   };

//   const bgBack = () => {
//    setBg(purple);
//    setName("Ayyo!! 😠");
//   }
 

//   return(
//     <>
//     {/* <div style={{ backgroundColor: "purple"}}> */}
//     <div style={{ backgroundColor: bg }}>
//        {/* we use camelCase in onClick function and bgChange function. */}
//       {/* <button onClick = {bgChange}> Click Me </button> */}
//       <button onClick = {bgChange} onDoubleClick = {bgBack} > {name} </button>
//       {/* <button onMouseOver = {bgChange} onMouseOut = {bgBack} > {name} </button> */}
//     </div>
//     </>
//   );
// };

// export default App;











// video 34 (React Forms......Controlled v/s Uncontrolled Components) In forms we have to ensure that the data we are entering in the input filled should be accessed in the backend/ database and be displayed or the data entered must be accessed and and on the spot on the basis of ReactDOM. In controlled component the react component like App is controlling the elements of form.It is working on our end.In case of DOM it is controlled component.

// import React, { useState } from "react";

// const App = () => {

//   //const [name, setName] = useState("Hira"); 
//   const [name, setName] = useState(); 
//   const [fullName, setFullName] = useState();

//   const inputEvent = (event) => {
//     //console.log("clicked");
//     //console.log(event);

//     //here target is an object.It is used to get the data user is typing.
//     console.log(event.target.value);

//     // this will display the data user is typing.
//     setName(event.target.value); 
//   };
  
//   const onSubmit = () => {
//     setFullName(name);
//   };

//   return(
//   <>
//   <div>
//     {/* <h1> Hello {name} </h1> */}
//     <h1> Hello ✋{fullName} </h1>
//     {/* <input type = "text" placeholder="Enter Your Name" /> */}

//     {/* by writing value= "" like that we can't write in input field and this because of controlled component. */}
//     {/* <input type = "text" placeholder="Enter Your Name" value= "" /> */}

//     {/* Here using default value we can write and it is better to use defaultValue but not a best way. */}
//     {/* <input type = "text" placeholder="Enter Your Name" defaultValue = "" /> */}

//     {/* here onChange is an event in which a function (of any name) is called. Every time we write a letter , one click is shown on console. When an event is triggered and the function is called an object(of any name) is also passed which can be accessed in the definition of inputEvent function.We are using name everywhere , it is called single source of truth. */}
//     <input type = "text" placeholder="Enter Your Name" onChange = {inputEvent} value = {name}/>
//     <button onClick = {onSubmit}> Click Me 👍</button>
//   </div>
//   </>
//   );
// };

// export default App;












// video 35
// import React, { useState } from "react";

// const App = () => {

//   //const [name, setName] = useState("Hira"); 
//   const [name, setName] = useState(); 
//   const [fullName, setFullName] = useState();
//   // const [password, setPassword] = useState();
//   const [lastName, setLastName] = useState();
//   const [lastNameNew, setLastNameNew] = useState();

//   const inputEvent = (event) => {
//     //console.log("clicked");
//     //console.log(event);

//     //here target is an object.It is used to get the data user is typing.
//     console.log(event.target.value);

//     // this will display the data user is typing.
//     setName(event.target.value); 
    
//   };
  
//   const onSubmits = (event) => {
//     event.preventDefault();
//     setFullName(name);
//     setLastNameNew(lastName);
//   };

//   const inputEventTwo = (event) => {
//     setLastName(event.target.value);
//   };

//   return(
//   <>
//   <div className= "main_div">
//     {/* form tag's default behavior is that it refreshes as we press enter after entering the data.*/}
//     <form onSubmit={onSubmits}>
//   <div>
//     {/* <h1> Hello {name} </h1> */}
//     <h1> Hello {fullName} {lastName}</h1>
//     {/* <input type = "text" placeholder="Enter Your Name" /> */}

//     {/* by writing value= "" like that we can't write in input field and this because of controlled component. */}
//     {/* <input type = "text" placeholder="Enter Your Name" value= "" /> */}

//     {/* Here using default value we can write and it is better to use defaultValue but not a best way. */}
//     {/* <input type = "text" placeholder="Enter Your Name" defaultValue = "" /> */}

//     {/* here onChange is an event in which a function (of any name) is called. Every time we write a letter , one click is shown on console. When an event is triggered and the function is called an object(of any name) is also passed which can be accessed in the definition of inputEvent function.When we use input field we are using controlled component means that form is not controlling it, our App component is controlling it.  */}
//     <input type = "text" placeholder="Enter Your Name" onChange = {inputEvent} value = {name}/>
//     <br />
//     {/* <input type = "text" placeholder="Enter Your Password" onChange = {inputEventTwo} value = {password}/> */}
//     <input type = "text" placeholder="Enter Your Last Name" onChange = {inputEventTwo} value = {lastName}/> 

//     <button type = "submit"> Submit Me 👍</button>
//   </div>
//   </form>
//   </div>
//   </>
//   );
// };

// export default App;











// // video 36
// import React, { useState } from "react";

// const App = () => {

//   //const [name, setName] = useState("Hira");
//  // const [name, setName] = useState(""); 

//  // We can also pass an object or call a function in the hook i.e useState. 
//   // const [name, setName] = useState(() =>{
//   //   fname: "",
//   //   lname: "",
//   // }); 

//   //here fname and lname are two objects.
//   const [fullName, setFullName] = useState({
//       fname: "",
//       lname: "",
//      }); 


//   const inputEvent = (event) => {
    
//     //here target is an object.It is used to get the data user is typing.
//     console.log(event.target.value);
//     // this will display the data user is typing.
//     //setName(event.target.value); 
//     console.log(event.target.name);

//     const value = event.target.value;
//     const name = event.target.name;

//     setFullName((preValue) => {
//     // console.log(preValue);
//     if (name === "fName") {
//       return {
//         fname: value,
//         lname: preValue.lname,
//       };
//     }else if (name === "lName") {
//       return{
//         fname: preValue.fname,
//         lname: value,
//       };
//     }
//     });
//   };


//   const onSubmits = (event) => {
//     event.preventDefault();
//     alert('form submitted');
//   };

//   return(
//   <>
//   <div className= "main_div">
//     {/* form tag's default behavior is that it refreshes as we press enter after entering the data.*/}
//     <form onSubmit={onSubmits}>
//   <div>
//     {/* <h1> Hello {name} </h1> */}
//     <h1> Hello  {fullName.fname} {fullName.lname}</h1>
//     {/* <input type = "text" placeholder="Enter Your Name" /> */}

//     {/* by writing value= "" like that we can't write in input field and this because of controlled component. */}
//     {/* <input type = "text" placeholder="Enter Your Name" value= "" /> */}

//     {/* Here using default value we can write and it is better to use defaultValue but not a best way. */}
//     {/* <input type = "text" placeholder="Enter Your Name" defaultValue = "" /> */}

//     {/* here onChange is an event in which a function (of any name) is called. Every time we write a letter , one click is shown on console. When an event is triggered and the function is called an object(of any name) is also passed which can be accessed in the definition of inputEvent function.When we use input field we are using controlled component means that form is not controlling it, our App component is controlling it.In this name attribute is used in form whenever we want to save the in backend and database. */}
//     <input type = "text" placeholder="Enter Your Name" name = "fname" onChange = {inputEvent}
//     value = {fullName.fname}
//      />
//     <br />
//     {/* <input type = "text" placeholder="Enter Your Password" onChange = {inputEventTwo} value = {password}/> */}
//     <input type = "text" placeholder="Enter Your Last Name" name = "lname" onChange = {inputEvent} 
//     value = {fullName.lname}
//     /> 

//     <button type = "submit"> Submit Me 👍</button>
//   </div>
//   </form>
//   </div>
//   </>
//   );
// };

// export default App;












// video 36
import React, { useState } from "react";

const App = () => {

  const [fullName, setFullName] = useState({
      fname: "",
      lname: "",
     }); 


  const inputEvent = (event) => {
    
    console.log(event.target.value);
   
    console.log(event.target.name);

    const value = event.target.value;
    const name = event.target.name;

    setFullName((preValue) => {
    if (name === "fName") {
      return {
        fname: value,
        lname: preValue.lname,
      };
    }else if (name === "lName") {
      return{
        fname: preValue.fname,
        lname: value,
      };
    }
    });
  };


  const onSubmits = (event) => {
    event.preventDefault();
    alert('form submitted');
  };

  return(
  <>
  <div className= "main_div">
    <form onSubmit={onSubmits}>
  <div>
    <h1> Hello  {fullName.fname} {fullName.lname}</h1>
    <input type = "text" placeholder="Enter Your Name" name = "fname" onChange = {inputEvent}
    value = {fullName.fname}
     />
    <br />
    <input type = "text" placeholder="Enter Your Last Name" name = "lname" onChange = {inputEvent} 
    value = {fullName.lname}
    /> 

    <button type = "submit"> Submit Me 👍</button>
  </div>
  </form>
  </div>
  </>
  );
}

export default App;


















