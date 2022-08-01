# Orbit - Futuristic Scifi Bootstrap 4 HTML Theme
# Version 1.00

This futuristic Scifi Theme based on Bootstrap 4 is set up with npm & webpack. It automatically compiles bootstrap & the custom SCSS files.
Based on the Orbit UI Kit (you can buy it if you need the Photoshop files): https://creativemarket.com/dannehr/163951-Orbit-SciFi-UI-Kit
Refer to the Bootstrap 4 documentatioon for detailed usage information for all elements: https://getbootstrap.com/docs/4.4/getting-started/introduction/

## Distributable files
You can find the compiled files in the *dist* folder.
Open *index.html* in a browser to see a demo page.
*app.css* includes all styles including the Bootstrap 4 styles. So you don't have to add Bootstrap separately.
*app.js* includes all scipts including Bootstrap 4 scripts. So you don't have to add Bootstrap separately.
The Pro Font webfont (for numbers & special headlines) can be found in *dist/assets/fonts*.
The Titillium webfont is added via Google Fonts.
Additionally the Font Awesome icon font is included.

## Source files

The source files can be found in the *src* folder.
There are some custom scripts in *index.js*.
*partials* includes header, footer, meta.
*pages* includes example pages and all Bootstrap components in the *elements* folder.
*scss* includes custom variables & styles.
To work with the source files you need npm installed. Then follow the instructions below:

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
# this port is often occupied, but you can use another port with the command below
npm run dev
# run with your own local domain & port (e.g. project-layout.local:5050)
# add your local domain to etc/hosts (e.g. project-layout.local)
# start with your desired port (e.g. 5050)
npm run dev -- --open --port 5050

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```
