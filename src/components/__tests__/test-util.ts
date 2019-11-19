export const MOBILE_VIEWPORT_WIDTH = 700;
export const MOBILE_VIEWPORT_HEIGHT = 700;

export const resizeWindow = (x: number, y: number) => {
    (window as any).innerWidth = x;
    (window as any).innerHeight = y;
    window.dispatchEvent(new Event('resize'));
};

export const resizeToMobile = () => {
    resizeWindow(MOBILE_VIEWPORT_WIDTH, MOBILE_VIEWPORT_HEIGHT);
};
