import React from "react"
import ReactDOM from "react-dom/client"
// import App from "./App.optimizing-context-api.tsx"
// import App from "./components/use-state/App"
// import App from "./components/typing-hooks/state-without-init-state/App"
// import App from "./components/typing-reducers/App.tsx"
// import App from "./components/passing-dispatch-as-prop/App.tsx"
// import App from "./components/type-helper/App.tsx"
// import App from "./components/generics/App.typing-hook-with-generics.tsx"
// import App from "./components/generics/App.generic-components.tsx"
// import App from "./components/generics/App.passing-types-to-components"
// import App from "./components/generics/App.reconsidering-generics"
import App from "./components/patterns/App.tsx"

import "./index.css"
import { ColorProvider } from "./components/passing-dispatch-as-prop/context/context.tsx"

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ColorProvider>
      <App />
    </ColorProvider>
  </React.StrictMode>
)
