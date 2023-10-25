import * as bootstrap from 'bootstrap';
import "/src/assets/scss/main.scss";

// Libraries
import { isWebp, documentHeight } from "./helpers/common";

export default class Core {
  static instance;
  constructor() {
    if (Core.instance) {
      return Core.instance;
    }
    Core.instance = this;
    this.init();
  }
  // Init
  async init() {
    isWebp();
    documentHeight();
    window.addEventListener("resize", () => {
      documentHeight();
    });
    const { Sizes } = await import("./utils/Sizes");
    const { Variables } = await import("./utils/Variables");

    this.sizes = new Sizes();
    this.variables = new Variables();
  }
}
