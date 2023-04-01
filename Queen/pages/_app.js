import Navbar from '../Components/nav/Navbar'
import '../styles/globals.css'

import { store } from '../dataStore/store'
import { Provider } from 'react-redux'

function MyApp({ Component, pageProps }) {
  return (
 <Provider store={store}>
    <Navbar>
      <Component {...pageProps} />
      </Navbar>
  </Provider>
  )
  }

export default MyApp
