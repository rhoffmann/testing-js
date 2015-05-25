build:
	- rm -r dist/
	mkdir dist
	jspm bundle-sfx app/main -o dist/app.bundle.js
	node_modules/.bin/uglifyjs dist/app.bundle.js -o dist/app.min.js
	node_modules/.bin/html-dist index.html --remove-all --minify --insert app.min.js -o dist/index.html
