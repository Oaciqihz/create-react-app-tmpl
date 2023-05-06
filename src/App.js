import { StyleProvider, legacyLogicalPropertiesTransformer } from '@ant-design/cssinjs';
import DefaultLayout from './container/DefaultLayout';
import '@/style/App.css';


function App() {
  return (
    <>
        <StyleProvider hashPriority="high" transformers={[legacyLogicalPropertiesTransformer]}>
          <DefaultLayout />
        </StyleProvider>
    </>
  );
}

export default App;
