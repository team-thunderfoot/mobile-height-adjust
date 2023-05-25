import JSUTIL from "@andresclua/jsutil";
import { tf_debounce } from "@andresclua/debounce-throttle";

class MobileHeightAdjust {
  constructor() {
    this.vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty("--vh", `${this.vh}px`);

    this.jsUtil = new JSUTIL();
    this.events();
  }

  events() {
    this.clickEvent = this.setHeight();
  }

  setHeight = () => {
    if (this.jsUtil.getTypeDevice("touch")) {
      document.documentElement.style.setProperty("--vh", `${this.vh}px`);
    }

    window.addEventListener(
      "resize",
      tf_debounce((e) => {
        this.vh = window.innerHeight * 0.01;
        document.documentElement.style.setProperty("--vh", `${this.vh}px`);
      }, 100)
    );
  };

  destroy() {
    this.clickEvent = {};
  }
}
export default MobileHeightAdjust;
