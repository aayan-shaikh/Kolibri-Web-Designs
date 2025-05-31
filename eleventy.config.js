const { sassPlugin } = require("eleventy-sass");

module.exports = function (eleventyConfig) {
  // Add Sass plugin

  // Copy static assets
  eleventyConfig.addPassthroughCopy("src/images");
  eleventyConfig.addPassthroughCopy("src/scripts");
  eleventyConfig.addPassthroughCopy("src/admin");

  // Add collections
  eleventyConfig.addCollection("portfolio", function (collection) {
    return collection.getFilteredByGlob("src/_data/portfolio/*.md");
  });

  eleventyConfig.addCollection("ru_portfolio", function (collection) {
    return collection.getFilteredByGlob("src/_data/ru_portfolio/*.md");
  });

  return {
    dir: {
      input: "src",
      output: "_site",
      includes: "_includes",
      layouts: "_layouts",
      data: "_data",
    },
    templateFormats: ["html", "md", "njk"],
    htmlTemplateEngine: "njk",
    markdownTemplateEngine: "njk",
  };
};
