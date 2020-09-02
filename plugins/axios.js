export default function ({ $axios, redirect, $sentry }) {
  // $axios.onRequest((config) => {
  //   console.log("process.server", process.server);
  //   console.log("Making request to %O", config);
  // });
  $axios.onError((error) => {
    $sentry.captureException(error)
  })
}
