the layout is created and wrapped in the _app.js so that all the pages in the app will have that same layout...


function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
      </Layout>
    )
}