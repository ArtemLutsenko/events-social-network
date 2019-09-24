import React from "react";
import ReactDOM from "react-dom";
import 'react-redux-toastr/lib/css/react-redux-toastr.min.css'
import { Provider } from "react-redux";
import ReduxToastr from 'react-redux-toastr'
import "./index.css";
import App from "./app/layout/App";
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter } from "react-router-dom";
import { configureStore } from "./app/store/configureStore";
import ScrollToTop from "./app/common/util/ScrollToTop";
import { loadEvents } from "./features/event/eventActions";

const store = configureStore();
store.dispatch(loadEvents())

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <ScrollToTop>
        <ReduxToastr  position ='bottom-right' transitionIn = "fadeIn" transitionOut = "fadeOut"
        />
        <App />
      </ScrollToTop>
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);

serviceWorker.unregister();
//revent-253605
//AIzaSyA7J03SjzkebzVCHmY3sz-NIjcsEDlirLg