import Routes from "./src/routes";

import ContextProvider from './src/contexts/app'

export default function App() {
  return (
    <>
    <ContextProvider>
      <Routes />
    </ContextProvider>
    </>
  );
}

