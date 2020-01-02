# frozen_string_literal: true

ruby '2.5.3'

source 'https://rubygems.org'

# Install GitHub Pages dependencies needed by bundle exec jekyll serve
gem 'github-pages', group: :jekyll_plugins

# Install html-proofer to test and validate the HTML output
gem 'html-proofer'

# Install rubocop to test and validate the Ruby source code
gem 'rubocop'

# Install jekyll-theme-marketing needed to define the layout
gem 'jekyll-theme-marketing'

# Install gems needed by bundle exec jekyll serve on Windows
if Gem.win_platform?
  gem 'tzinfo-data'
  gem 'wdm'
end
