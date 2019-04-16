ECHO ON

ECHO "# Stop cached listeners"
watchman watch-del-all

ECHO "# Remove installed modules"
RMDIR node_modules /S /Q

ECHO "# Remove yarn meta files"
del yarn*

ECHO "# Install only fresh copies"
yarn cache clean

