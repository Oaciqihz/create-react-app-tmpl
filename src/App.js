import { StyleProvider, legacyLogicalPropertiesTransformer } from '@ant-design/cssinjs';
import DefaultLayout from './container/DefaultLayout';
// import '../App.css';

function App() {
  return (
    <StyleProvider hashPriority="high" transformers={[legacyLogicalPropertiesTransformer]}>
      {/* <BeforeRouterEnter /> */}
      <DefaultLayout />
    </StyleProvider>
  );
}

export default App;
