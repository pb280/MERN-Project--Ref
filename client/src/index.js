import React from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import App from './App'

const container = document.getElementById('root')
const root = createRoot(container)
root.render(<App />)

// ******* OLD CODE
// ReactDOM.render(<App />, document.getElementById('root'));
