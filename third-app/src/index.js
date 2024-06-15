import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Demo from './Demo';
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import Demo1 from './components/Demo1';
import Cascading from './components/Cascading';
import "./components/text.css"
import First from './props/First';
import Second from './props/Second';
import Third from './props/Third';
import Example from './props/Example';
import One from './eventHandler/One';
import Two from './hooks/useState/Two';
import { Three } from './hooks/useState/Three';
import Four from './hooks/useState/Four';
import Seven from './hooks/useState/Seven';
import Eight from './hooks/useState/Eight';
import Eleven from './hooks/useEffect/Eleven';
import { Twelve } from './hooks/useEffect/Twelve';
import Dependency from './hooks/useEffect/Dependency';
import Ex1 from './hooks/useEffect/Ex1';
import Ex1extend from './hooks/useEffect/Ex1extend';
import Ex2 from './hooks/useEffect/Ex2';
import UseReducer from './UseReducer/UseReducer';
import UsereducerEx2 from './UseReducer/UsereducerEx2';
import UseRef from './useRef/UseRef';
import UseRef2 from './useRef/UseRef2';
import UseMemo from './useMemo/UseMemo';
import ParentComp from './UseCallBack&ReactMemo/ParentComp';
import PageTitle from './customHooksEx1/PageTitle';
import Sample from './CustomhooksEx2/Sample';
import Sample1 from './customHooksEx3/Sample1';





const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
     {/* <Demo1/> */}
    {/* <Cascading/>  */}
    {/* <First/> */}
    {/* <Second/> */}
    {/* <Third/> */}
    {/* <Example/> */}
    {/* <One/> */}
    {/* <Two/> */}
    {/* <Three/> */}
    {/* <Four/> */}
    {/* <Seven/> */}
    {/* <Eight/> */}
    {/* <Eleven/> */}
    {/* <Twelve/> */}
    {/* <Dependency/> */}
    {/* <Ex1/> */}
    {/* <Ex1extend/> */}
    {/* <Ex2/> */}
    {/* <UseReducer/> */}
    {/* <UsereducerEx2/> */}
    {/* <UseRef/> */}
    {/* <UseRef2/> */}
    {/* <UseMemo/> */}
    {/* <ParentComp/> */}
    {/* <PageTitle/> */}
    {/* <Sample/> */}
     {/* <Sample1/>  */}
     
   

    


  
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
