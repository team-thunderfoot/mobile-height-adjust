# mobile-height-adjust

The `Mobile Height Adjust` package adjusts the height of the mobile screen (particularly on iOS devices) by subtracting the height of the navigation bar, ensuring that the content occupies the full viewport height.

## Installation

```sh
npm install @teamthunderfoot/mobile-height-adjust
```

## Usage

```sh
import MobileHeightAdjust from "@teamthunderfoot/mobile-height-adjust";

class Page {
  constructor() {
    this.init();
    this.events();
  }
  init() {
    const mobileHeightAdjust = new MobileHeightAdjust();
  }
  events() {}
}
export default Page;
new Page();

```

The `mobile-height-adjust` package automatically sets the CSS variable `--vh` to adjust the height of the mobile screen, excluding the height of the navigation bar. This ensures that the content fits within the visible viewport.

## Destroy

To remove the functionality of the `mobile-height-adjust` package, you can simply destroy the instance. Call the `destroy` method on the instance of MobileHeightAdjust:

```sh
mobileHeightAdjust.destroy();
```

Calling the destroy method will remove the event listener and revert the CSS variable `--vh` to its original value.
