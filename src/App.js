import { StyleProvider, legacyLogicalPropertiesTransformer } from '@ant-design/cssinjs';
import { EthereumClient, w3mConnectors, w3mProvider } from '@web3modal/ethereum'
import { Web3Modal } from '@web3modal/react'
import { configureChains, createClient, WagmiConfig } from 'wagmi'
import { arbitrum, mainnet, polygon, polygonMumbai } from 'wagmi/chains'
import DefaultLayout from './container/DefaultLayout';
import '@/style/App.css';

const chains = [arbitrum, mainnet, polygon, polygonMumbai]
const projectId = 'YOUR_PROJECT_ID'

const { provider } = configureChains(chains, [w3mProvider({ projectId })])
const wagmiClient = createClient({
  autoConnect: true,
  connectors: w3mConnectors({ projectId, version: 1, chains }),
  provider
})
const ethereumClient = new EthereumClient(wagmiClient, chains)

function App() {
  return (
    <>
      <WagmiConfig client={wagmiClient}>
        <StyleProvider hashPriority="high" transformers={[legacyLogicalPropertiesTransformer]}>
          <DefaultLayout />
        </StyleProvider>
      </WagmiConfig>

      <Web3Modal projectId={projectId} ethereumClient={ethereumClient} />
    </>
  );
}

export default App;
