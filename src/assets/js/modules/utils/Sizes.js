import EventEmitter from "eventemitter3";

export class Sizes extends EventEmitter {
  constructor() {
    super();
    this.width = window.innerWidth;
    this.height = window.innerHeight;
    window.addEventListener("resize", () => {
      this.emit("resize");
    });
  }
}
