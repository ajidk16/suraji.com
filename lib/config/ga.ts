declare global {
    interface Window {
        gtag: any;
    }
}
export const pageview = (url: any) => {
    if (window !== undefined) {
        window.gtag("config", process.env.NEXT_PUBLIC_GA, {
            page_path: url,
        });
    }
};

export const event = (props: { action: any, params: any }) => {
    if (window !== undefined) {
        window.gtag("event", props.action, props.params);
    }
};