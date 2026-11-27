const readEnv = (value: string | undefined, fallback: string): string => {
    const trimmed = (value ?? "").trim();
    return trimmed === "" ? fallback : trimmed.replace(/\/+$/, "");
};

export const configs = {
    apiURL: readEnv(import.meta.env.VITE_REACT_APP_API_URL, "/api"),
    assetURL: readEnv(import.meta.env.VITE_REACT_APP_ASSET_URL, ""),
    portalRouterPrefix: readEnv(import.meta.env.VITE_REACT_APP_PORTAL, "/portal"),
};
