# mobile-height-adjust

The `Mobile Height Adjust` package adjusts the height of the mobile screen by subtracting the height of the navigation bar, ensuring that the content occupies the full viewport height.
Here's an example

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

To make the adjustment work properly, you need to apply the following CSS rule to the component that should occupy the full viewport height:

```sh
.your-component {
  height: calc(var(--vh, 1vh) * 100);
}
```

This rule calculates the height based on the adjusted --vh value, allowing the component to fill the entire viewport height.

## Destroy

To remove the functionality of the `mobile-height-adjust` package, you can simply destroy the instance. Call the `destroy` method on the instance of MobileHeightAdjust:

```sh
mobileHeightAdjust.destroy();
```

Calling the destroy method will remove the event listener and revert the CSS variable `--vh` to its original value.
