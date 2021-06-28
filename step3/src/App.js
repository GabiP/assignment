import './App.css';
import CardsList from './components/CardsList/CardsList';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import CardDetail from "./components/CardDetail/CardDetail";

function App() {
  return (
    <div >
        <BrowserRouter>
            <Switch>
                <Route
                    path="/detail/:id"
                    render={routerProps => <CardDetail {...routerProps} />}
                />
                <Route path="/">
                    <CardsList />
                </Route>
            </Switch>
        </BrowserRouter>
    </div>
  );
}

export default App;
