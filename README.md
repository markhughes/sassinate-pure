# Sassinate Pure
A simple Node.JS and Grunt build script that converts Pure.css to a simple Sass format.

This will always fetch the latest available version of Pure from npm. 

# Usage
    npm install
    grunt

... or, if you're feeling extra lazy

    node index.js

Then, simply import the parts you need from the build directory (rename it for your convenience).

# Examples
In these examples I have renamed 'build' to 'pure'.

## Import base and grids
```sass
@import 'pure/base';
@import 'pure/grids';
```
## Import base, menus, and grids
```sass
@import 'pure/base';
@import 'pure/menus';
@import 'pure/grids';
```
## Import everything
There is a simple `all.scss` file to simplift this for you
```sass
@import 'pure/all';
```
# TODO
* Create a defaults file to allow easily changing colours.
