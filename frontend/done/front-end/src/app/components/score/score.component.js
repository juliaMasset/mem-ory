import { parseUrl } from "../../utils/utils.js";
// TODO Step 7 import "./score.component.html"

/* class ScoreComponent constructor */
export class ScoreComponent {
  constructor() {
    const params = parseUrl();
    this.name = params.name;
    this.size = parseInt(params.size);
    this.time = parseInt(params.time);
  }

  /* method ScoreComponent.init */
  init() {
    document.getElementById("name").innerText = this.name;
    document.getElementById("size").innerText = this.size;
    document.getElementById("time").innerText = this.time;
  }

  // TODO Step 7 implement getTemplate() {}
}

function parseUrl() {
  return (window.location.href.split("?")[1] || "")
    .split("&")
    .map((kv) => kv.split("="))
    .reduce((params, [k, v]) => {
      params[k] = v;
      return params;
    }, {});
}
