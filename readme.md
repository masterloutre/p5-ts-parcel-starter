## Description

Template for a p5js - typesript project.

Node/Npm based. Uses Parcel for Module loading, compiling typescript and serving on a local server on desktop.

The project also has support for gitpod. As parcel server was difficult to setup on gitpod I kept the dependency to browser-sync which is easier to manage. An initial dev build has to be run with the "build-dev" script then "watch" and "serve-gitpod" can be run simultaneously in different terminals to enable auto-compile and auto-reload when source file change. 

## Notes on setting up the project

package.json : files used by npm to get config and list of dependencies to install
run npm install to install dependencies
p5 -> creative coding library
browser-sync -> utility to serve on a synchronisesd dev server
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

.gitpod.yml decribes the environment setup scripts that execute when starting the project with gitpod (go to url https://gitpod.io/#[repo url]). Install dependencies, dev build then start parcel watch and browser-sync to manage the preview.


## Credits
based on : https://github.com/masterloutre/p5js-starter-with-typings
and https://github.com/masterloutre/p5-ts-parcel-starter
