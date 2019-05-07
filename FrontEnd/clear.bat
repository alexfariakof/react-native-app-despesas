ECHO ON

ECHO "# Stop cached listeners"
watchman watch-del-all

ECHO "# Remove yarn meta files"
del yarn*

ECHO "# Install only fresh copies"
yarn cache clean

ECHO "# Remove installed modules"
RMDIR node_modules /S /Q && npm install $$ npm audit fix && yarn
