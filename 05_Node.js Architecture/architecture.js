const os = require("os");

// Number of logical CPU cores available
console.log(os.cpus().length);
//output:16 in my case
//os.cpus() reutrns an array, for example
// [
//   {
//     model: 'Intel(R) Core(TM) i5-12450H',
//     speed: 2000,
//     times: {...}
//   },
//   {
//     model: 'Intel(R) Core(TM) i5-12450H',
//     speed: 2000,
//     times: {...}
//   },
//   {
//     model: 'Intel(R) Core(TM) i5-12450H',
//     speed: 2000,
//     times: {...}
//   },
//   ...
// ]
//USING PROPERTY OF ARRAYS.LENGTH , we can extract number of cores on our device
