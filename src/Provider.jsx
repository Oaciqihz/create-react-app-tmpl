import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
    StyleProvider,
    legacyLogicalPropertiesTransformer,
} from "@ant-design/cssinjs";
import { ConfigProvider } from "antd";

const queryClient = new QueryClient();

export default function Providers({ children }) {
    return (
        <QueryClientProvider client={queryClient}>
            <StyleProvider
                hashPriority="high"
                transformers={[legacyLogicalPropertiesTransformer]}
            >
                <ConfigProvider
                    theme={{
                        components: {
                            // Progress: { gapDegree: 0 },
                        },
                    }}
                >
                    {children}
                </ConfigProvider>
            </StyleProvider>
        </QueryClientProvider>
    )
}
