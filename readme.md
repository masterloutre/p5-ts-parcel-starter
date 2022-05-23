## Notes on setting up the project

based on : https://github.com/masterloutre/p5js-starter-with-typings

package.json : files used by npm to get config and list of dependencies to install
run npm install to install dependencies
p5 -> creative coding library
browser-sync -> utility to serve on a synchronises local server -> NOT USED ANYMORE
typescript -> support and compiler for ts
@types/p5 -> type definitions for p5js
parcel -> module bundle and also compile ts and serve on local server

there are two scripts registered to serve in a synchronised from vscode locally or gitpod in the browser
index.html should be at the root
those script can be run with : npm run scriptname

there is one "build-ts" script for building typescript sources into js 
it uses the tsconfig.json file to know the sources to include, output dir and so on
(npx allows to run tsc command locally)

parcels is a module loader, enables import / export api
build script builds ts sources and bundle
start script serve on local server 
sources are watched and recompiled on file change



