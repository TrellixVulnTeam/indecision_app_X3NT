//imported files run before app.js:
import React from "react";
import ReactDOM from "react-dom";
import IndecisionApp from "./components/IndecisionApp";


ReactDOM.render(<IndecisionApp />, document.getElementById("app"));

class OldSyntax {
    constructor() {
        this.name = "Clay";
    }
    getGreeting() {
        return `Hi my name is ${this.name}.`;
    }
}

const oldSyntax = new OldSyntax();
console.log(oldSyntax.getGreeting());


class NewSyntax {
    name = "C-man";
    getGreeting = () => {
        return `Hi my name is ${this.name}.`;
    }
}

const newSyntax = new NewSyntax();
const news = newSyntax.getGreeting();
console.log(news);