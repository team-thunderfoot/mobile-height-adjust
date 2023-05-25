import MobileHeightAdjust from "./MobileHeightAdjust";

class Page {
  constructor() {
    this.init();
    this.events();
  }
  init() {
    const mobileHeightAdjust = new MobileHeightAdjust();

    document
      .querySelector(".js-mobile-height")
      .addEventListener("click", (e) => {
        e.preventDefault();
        mobileHeightAdjust.destroy();
      });
  }
  events() {}
}
export default Page;
new Page();
