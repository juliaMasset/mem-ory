// TODO Step 7 import { Component } from "../../utils/component";
// TODO Step 7 import template from "./score.component.html"

import { parseUrl } from "../../utils/utils";

    class ScoreComponent {
        constructor(id) {
            let params = parseUrl();
            this.name = params.name;
            this.size = parseInt(params.size);
            this.time = parseInt(params.time);
        }

        init() {
            document.getElementById('name').innerText = this.name;
            document.getElementById('size').innerText = this.size;
            document.getElementById('time').innerText = this.time;
        }
    }
    // TODO Step 7 implement getTemplate() {}

    // put component in global scope, to be runnable right from the HTML.
    // TODO Step 7 export ScoreComponent
    window.ScoreComponent = ScoreComponent;

