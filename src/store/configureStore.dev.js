//Redux
import { store} from "component-calc-core"
import initialState from '../reducers/initialState';
import { applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

export default function configureStore() {
    return store.createStore(
      initialState,
      composeWithDevTools(
          applyMiddleware(thunk),
      ),
    )
}
