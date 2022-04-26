import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./Components/Header";
import Project from "./Components/Project";
import Home from "./pages/Homes";
import Footer from "./Components/Footer";
import { Provider } from "react-redux";
import store from "./redux/store";
import Catalog from "./Components/Catalog";
import SimpleReactLightbox from 'simple-react-lightbox';
// import Contacts from "./Components/Contacts";

function App() {

  return (
    <>
      <SimpleReactLightbox>
        <Provider store={store}>
          <Router>
            <Header />
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/home" component={Home} />
              <Route path="/heating" component={Project} />
              <Route path="/photos" component={Catalog} />
              {/* <Route path="/contacts" component={Contacts} /> */}
            </Switch>
            <Footer />
          </Router>
        </Provider>
      </SimpleReactLightbox>
    </>
  );
}

export default App;
