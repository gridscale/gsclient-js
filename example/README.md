# gridscale API client demo

This is just a small application demonstrating how to use the gridscale API client, and how to handle errors.

The demo runs on the CLI with nodeJS or in the browser.

## Run the demo

Checkout the repository and run `npm i` within this folder. You will need an **API Token** and your **User-UUID** for the demo to run. To get them, log in to the gridscale panel (https://my.gridscale.io), navigate to the **API-Keys** section (you may have to activate it by customizing the menu).

The demo will list you running and stopped servers and all you storages. Additionally HTTP errors were handled and displayed (test it by entering wrong credentials).

### CLI
Run `node index.js`

### Browser
Open the `index.html`in your browser. When you made changes to the JavaScript code, run `npm run browserify` to compile the script for the browser.
