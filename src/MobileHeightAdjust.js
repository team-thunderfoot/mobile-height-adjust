import JSUTIL from "@andresclua/jsutil";
import { tf_debounce } from "@andresclua/debounce-throttle";

class MobileHeightAdjust {
  constructor() {
    this.vh = window.innerHeight * 0.01; // Calculate 1% of the window height
    document.documentElement.style.setProperty("--vh", `${this.vh}px`); // Set the custom CSS variable "--vh" to the calculated value

    this.jsUtil = new JSUTIL();
    this.events();
  }

  events() {
    this.setHeight(); // Call the method directly instead of assigning it as an event listener
  }

  setHeight() {
    if (this.jsUtil.getTypeDevice("touch")) {
      // Check if the device is touch-enabled
      document.documentElement.style.setProperty("--vh", `${this.vh}px`); // Set the custom CSS variable "--vh" to the calculated value
    }

    window.addEventListener(
      "resize",
      tf_debounce((e) => {
        this.vh = window.innerHeight * 0.01; // Recalculate 1% of the window height
        document.documentElement.style.setProperty("--vh", `${this.vh}px`); // Set the custom CSS variable "--vh" to the recalculated value
      }, 100)
    );
  }

  destroy() {
    window.removeEventListener("resize", this.setHeight); // Remove the event listener correctly
  }
}
export default MobileHeightAdjust;
