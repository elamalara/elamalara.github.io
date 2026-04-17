# Elizabeth Malara-Wieczorek's portfolio

This is the portfolio of art by Elizabeth Malara Wieczorek, live at http://malara.ca/
The site is built using `hugo` framework.

# Workflow

Development in `dev` branch
Deployment from `gh-pages` branch

## Local workflow:

### Initialization

Clone the repo twice into two folders: `elamalara-dev` and `elamalara-gh-pages`
In `elamalara-dev`, `git checkout dev`. Upstream is `origin/dev`
In `elamalara-gh-pages`, `git checkout gh-pages`. Upstream is `origin/gh-pages`

### Feature work
Do feature work in the `elamalara-dev` folder.
Use `hugo --minify` to generate content into the `elamalara-dev/public` folder.
Commit changes and push into the `dev` branch.
Copy content of `dev\public` directory into the `elamalara-gh-pages` directory.
Commit the updates and push into the `gh-pages` branch to update the website.
