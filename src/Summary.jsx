import React, { useState } from "react";
import { Header } from "./Header.jsx";
import { Name } from "./question comp/Name";
import { Number } from "./question comp/Number";
import { FeedTime } from "./question comp/FeedTime";
import { Insurance } from "./question comp/Insurance";
import { Castrated } from "./question comp/Castrated";

export const Summary = ({ answers }) => {
  return (
    <div className="Summary">
      <h2>Thank you for your answers, this is the information you provided:</h2>
      <p>Name: {answers.name}</p>
      <p>Number of cats: {answers.number}</p>
      <p>Times to feed: {answers.feedtime}</p>
      <p>Insurance: {answers.insurance}</p>
      <p>Castrated: {answers.castrated}</p>
    </div>
  );
  };



