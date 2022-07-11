module.exports = {
  reactStrictMode: true,
  exportTrailingSlash: true,
  exportPathMap: function() {
    return {
      '/': { pages: '/'}
    };
  }
}
