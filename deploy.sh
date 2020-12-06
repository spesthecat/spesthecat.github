yarn generate
cd dist/
git init
git add .
git commit -m "deploy"
git push -f https://github.com/spesthecat/spesthecat.github.io.git master:gh-pages
cd ..