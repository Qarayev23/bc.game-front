import lozad from "lozad";

export class Variables {
  constructor() {
    this.lang = "en";
    this.API_HOST = "http://localhost:8000";

    // Lazy load initialize
    this.lozadObserver = lozad(".lozad", {
      rootMargin: "25px 0px",
      threshold: 0.1,
      enableAutoReload: true,
    });
    this.lozadObserver.observe();
  }
}
