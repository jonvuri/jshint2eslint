# jshint2eslint

Map jshint configurations to eslint configurations.

Use as a module by requiring from jshint2eslint.js:

```
var j2e = require('jshint2eslint')
var eslintConfig = j2e( jshintConfig )
```

Or use on the command line by invoking index.js (prints resulting eslint config to stdout):

```
node index.js ./.jshintrc
```
