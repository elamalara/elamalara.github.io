# Elizabeth Malara-Wieczorek's portfolio

This is the portfolio of art by Elizabeth Malara Wieczorek, live at http://malara.ca/
The site is built using `hugo` framework.

# Workflow

Development in topic branch off the `dev` branch.
GitHub action updates `gh-pages` branch based on updates to the `dev` branch.
There is no need to manually deploy. Shortly after pushing to the `dev` branch, the website updates.

## Feature work
1. on `dev` branch, `git pull` to synchronize
2. `git checkout featureName` to create topic branch "featureName"
3. Make changes
4. Use `hugo --serve` to spawn a local web server and preview changes
5. Commit changes and push.
6. On GitHub, create the PR, review and complete.

Alternatively, work on `dev` branch: skip steps 2. and 6.

### Manual deployment
If automatic deployment does not work, use the following steps:
1. Clone the repo again, into `elamalara-gh-pages`. For the sake of instructions, assume original clone is in `elamalara-dev`.
 - In `elamalara-dev`, `git checkout dev`. Upstream is `origin/dev`
 - In `elamalara-gh-pages`, `git checkout gh-pages`. Upstream is `origin/gh-pages`
2. In `elamalara-dev` folder, use `hugo --minify` to generate content into the `elamalara-dev/public` folder.
3. Take a note of the commit sha in `elamalara-dev` folder, you will use it where you see `$sha` in further instructions 
4. Remove content of the `elamalara-gh-pages\` directory (except for the hidden `.git` folder) 
5. Copy content of `dev\public` directory into the `elamalara-gh-pages` directory.
6. Commit the updates with message `deploy: $sha` and push into the `gh-pages` branch.
