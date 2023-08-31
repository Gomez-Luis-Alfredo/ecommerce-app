
import ReactDOM from 'react-dom/client'
import './index.css'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/font-awesome/css/font-awesome.min.css'
import { Provider } from 'react-redux'
import store from './redux/reducer/Store'

import App from './App'

 


ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
<App/>

  </Provider>
    
)
