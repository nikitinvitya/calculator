import {createRoot} from 'react-dom/client';
import App from "./app/App";
import ExpProvider from "./app/providers/ExpProvider/ui/ExpProvider";

const container = document.getElementById('root')

if (!container) {
  throw new Error('root is undefined')
}

const root = createRoot(container)

root.render(
  <ExpProvider>
    <App/>
  </ExpProvider>
)