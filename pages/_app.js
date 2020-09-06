import App from 'next/app';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import reduxThunk from 'redux-thunk';
import Layout from '../components/Layout';
import reducers from '../reducers/index';

const store = createStore(reducers, {}, applyMiddleware(reduxThunk));

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Layout>{(props) => <Component {...pageProps} {...props} />}</Layout>
    </Provider>
  );
}

MyApp.getInitialProps = async (appContext) => {
  const appProps = await App.getInitialProps(appContext);
  // console.log(appProps);
  return { ...appProps };
};

export default MyApp;
