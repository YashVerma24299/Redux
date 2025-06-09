// Provider component:
    // It makes the Redux store available to your entire application.

import Todo from './components/Todo';
import {Provider} from 'react-redux'
import {store} from "./app/store"

function App() {
  return (
    <>
      {/* Ye jo provider hai "todo" ko "store" dega aur agr todo ki trh 10 aur ho unko bhi sore dega... */}
      <Provider store={store}> {/* It makes the Redux store available to all nested component */}
        <Todo/>
      </Provider>
    </>
  )
}

export default App
