import type { Plugin } from "vite";

export default function cloudflareWorkersDevEnvironmentShim(): Plugin {
	const ID = "cloudflare:workers";
	return {
		name: "cloudflare-workers-dev-shim",
		apply: "serve", // dev‑only
		enforce: "pre",
		resolveId(id: string) {
			if (id === ID) {
				return id;
			} // tell Vite we handled it
		},
		load(id: string) {
			if (id === ID) {
				return `
    // import { getPlatformProxy } from "wrangler";
    // const cloudflare = await getPlatformProxy();
    // export const env = cloudflare.env;
    const { getPlatformProxy } = await import('wrangler').catch(()=>{
      throw new Error('Package "wrangler" not found. Please install it to use this feature.');
    });
    const { env } = await getPlatformProxy();
    export { env };
`;
			}
		},
	};
}
