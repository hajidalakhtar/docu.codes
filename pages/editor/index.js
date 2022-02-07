import React, { useState,useEffect } from "react";
import CodeMirror from '@uiw/react-codemirror';
import { html } from '@codemirror/lang-html';
import dynamic from 'next/dynamic'


function App() {
  const [isEditor, setIsEditor] = useState(false);
  const [input, setInput] = useState(`<h1>asdasdas</h1>`);

  useEffect(() => {
    document.querySelectorAll('style,link[rel="stylesheet"]').forEach(item => item.remove())



    
  }, []);
  
  var changeinput = (event) => {
    event.preventDefault();
    setInput(event.target.value);
  };
  var changeToEditor = (event) => {
    event.preventDefault();
    setIsEditor(true);
  };

  var createFullPostMarkup = () => {
    return {
      __html: `${input}`
    };
  };

   const menuBar = {
       margin: 0,
  padding: 0,
  backgroundColor: "white",
  height: "66px",
  borderBottom: "3px solid black",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  // padding: "0 10px 0 10px",
  color: "white"
    };

 const body  = {
  margin: 0,
  padding: 0,
  boxSizing: "border-box",
  fontWeight: 300,
 
}


  
const logo = {
  fontSize:"60%",
  fontWeight: "bold",
}





const codeContainer = {
  height: "calc(100vh - 41px)",
  width: "50%",
  backgroundColor: "#ffffff",
  position: "relative",
  float: "left",
}





const resultBox = {
  marginLeft:"10px",
  paddingTop:"10px",
  wordWrap: "break-word",
  width: "100%",
  height: "100%",
  border: "none",
  backgroundColor: "#fff",
}

const border= {
  height:"calc(100vh - 41px)",
  border: "none",
  borderLeft: "3px solid black",
 overflowY:"scroll"
}

// #resultBox > h1 {
//  margin: 0;
// }

  
  return (
    <div style={body}>
        <div id="wrapper">
          <div style={menuBar}>
            <div id="logo" style={{ marginLeft: "10px" }}>
              <img src="https://www.docu.codes/docu_logo.png" width="100" />
            </div>
          </div>


          <div style={codeContainer} id="htmlContainer">
            

  
  <CodeMirror
              name="solution"
              id="source"
              // onChange={changeinput}
              height="calc(100vh - 41px)"
              style={{ fontSize: "15px",height:300 }}
              value={input}
              placeholder="Example HTML code"
      extensions={[html({ autoCloseTags: true })]}
      onChange={(value, viewUpdate) => {
        setInput(value);
      }}
    />
    
      

          </div>
          <div style={codeContainer} id="resultContainer">
         

        <div
             style={border}
            >
            <div
              style={resultBox}
              dangerouslySetInnerHTML={createFullPostMarkup()}
            ></div>

                </div>
          </div>
        </div>
    </div>
  );
}

export default App;
 