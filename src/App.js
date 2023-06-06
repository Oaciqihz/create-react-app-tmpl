import { useEffect } from 'react';
import i18n from 'i18next';
import { StyleProvider, legacyLogicalPropertiesTransformer } from '@ant-design/cssinjs';
import DefaultLayout from './container/DefaultLayout';
import '@/style/App.css';


function App() {


  useEffect(() => {
    let lang
    if (localStorage.getItem(process.env.APP_LANG)) {
      lang = localStorage.getItem(process.env.APP_LANG);
    }else{
      lang = navigator.language !== 'zh-CN' ? 'en-US' : 'zh-CN';
      localStorage.setItem(process.env.APP_LANG,lang)
    }
    i18n.changeLanguage(lang);
  },[])

  return (
    <>
        <StyleProvider hashPriority="high" transformers={[legacyLogicalPropertiesTransformer]}>
          <DefaultLayout />
        </StyleProvider>
    </>
  );
}

export default App;
