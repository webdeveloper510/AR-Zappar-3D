import React, { useContext } from 'react'
import { contextObject } from '../ContextStore/ContextApi';

const TextDetail = ({handleFontStyle,applyfont}) => {

const ctx=useContext(contextObject);
  const fontselected=ctx.fontselected;
  const Selectedfont=ctx.Selectedfont;


  return (
  <div
    // eventKey="second"
    // eventKey={secondKey}
    // eventKey={isOpen ? "second" : null}
    className="bg-light p-4 tab-content"
    style={{zIndex:'9',width:'360px',height:'auto', boxShadow: '5px 0 5px -2px rgba(0, 0, 0, 0.1)',position:'absolute',left:'75px',top:'0px' }}
  >
    <p className="m-0">Text</p>
    <p className="m-0 pt-2">Text Hierarchy</p>
    <hr />

    <p
      className={`m-0 first-head ${
        fontselected === "hading" ? "selected" : ""
      }`}
      onClick={(e) => {
        handleFontStyle(e, "hading");
      }}
    >
      Add a heading
    </p>
    <p
      className={`m-0 second-head ${
        fontselected === "sub-hading" ? "selected" : ""
      }`}
      onClick={(e) => {
        handleFontStyle(e, "sub-hading");
      }}
    >
      Add a subheading
    </p>
    <p
      className={`m-0 third-head ${
        fontselected === "para" ? "selected" : ""
      }`}
      onClick={(e) => {
        handleFontStyle(e, "para");
      }}
    >
      Add a paragraph
    </p>
    <br />
    <p className="thene-txted">Themed text</p>
    <hr />
    <div className="buttons text-side-btn">
      <p className={`Standard-title ${ fontselected === "standard" ? "selected" : ""}`} onClick={(e) => { handleFontStyle(e, "standard"); }} style={{fontFamily:'Roboto'}}>
        Standard title
      </p>
      <p
        className={`square Rounded-title ${
          fontselected === "rounded" ? "selected" : ""
        }`}
        onClick={(e) => {
          handleFontStyle(e, "rounded");
        }} style={{fontFamily:'Comfortaa'}}
      >
        Rounded title
      </p>
      <p
        className={`ellipse Elegant-title ${
          fontselected === "elegant" ? "selected" : ""
        }`}
        onClick={(e) => {
          handleFontStyle(e, "elegant");
        }} style={{fontFamily:'Cookie'}}
      >
        Elegant title
      </p>
      <p
        className={`ellipse Classic-title ${
          fontselected === "classic" ? "selected" : ""
        }`}
        onClick={(e) => {
          handleFontStyle(e, "classic");
        }} style={{fontFamily:'Philosopher'}}
      >
        Classic title
      </p>
      <p
        className={`round Modern-title ${
          fontselected === "modern" ? "selected" : ""
        }`}
        onClick={(e) => {
          handleFontStyle(e, "modern");
        }} style={{fontFamily:'Quicksand'}}
      >
        Modern title
      </p>
      <p
        className={`round Futuristic-title ${
          fontselected === "futuristic" ? "selected" : ""
        }`}
        onClick={(e) => {
          handleFontStyle(e, "futuristic");
        }} style={{fontFamily:'Orbitron'}}
      >
        Futuristic title
      </p>
      <p
        className={`round Handwritten-title ${
          fontselected === "handwritten" ? "selected" : ""
        }`}
        onClick={(e) => {
          handleFontStyle(e, "handwritten");
        }} style={{fontFamily:'Sacramento'}}
      >
        Handwritten title
      </p>
      <p
        className={`round Magic-title-2 ${
          fontselected === "magic" ? "selected" : ""
        }`}
        onClick={(e) => {
          handleFontStyle(e, "magic");
        }} style={{fontFamily:'Snowburst One'}}
      >
        Magic title 2
      </p>
      <p
        className={`round Funky-title ${
          fontselected === "funky" ? "selected" : ""
        }`}
        onClick={(e) => {
          handleFontStyle(e, "funky");
        }} style={{fontFamily:'Wallpoet'}}
      >
      
        Funky title
      </p>
    </div>
    <button className="applybutton" onClick={applyfont}>
      Apply
    </button>
  </div>
  )
}

export default TextDetail