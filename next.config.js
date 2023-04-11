const withVideos = require('next-videos')

module.exports = withVideos()



// const withPlugins = require('next-compose-plugins');
// const withOptimizedImages = require('next-optimized-images');

// module.exports = withPlugins([
//     [withOptimizedImages, {
//       // Configuration options for next-optimized-images:
//       // https://github.com/cyrilwanner/next-optimized-images#configuration
  
//       // Add imagemin-optipng and imagemin-mozjpeg as plugins:
//       mozjpeg: {
//         quality: 80,
//       },
//       optipng: {
//         optimizationLevel: 3,
//       },
//     }],
  
//     // other plugins here
//   ]);