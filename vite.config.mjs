import { defineConfig } from "vite"
import UserscriptPlugin from "vite-userscript-plugin"
import { name, version} from "./package.json"

export default defineConfig((config) =>
{
    return {
        plugins: [
            new UserscriptPlugin({
                entry: "source/index.ts",
                header: {
                    name,
                    version,
                    match: [
                        "https://garticphone.com/*",
                        "https://beta.garticphone.com/*"
                    ],
                    icon: "https://lh3.googleusercontent.com/aAzOHyz8zmhegHvzqH9ku3mnzGAfxunxj679OD-TpYsSVnB6CRDUiq2Vjo285u5B9Psfza9mnSrSG8j6QyMU1zH8uA=s60"
                },
                server: {
                    port: 3000
                }
            })
        ]
    }
})