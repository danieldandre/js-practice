let isInitialized = false;
let initTimeStamp = null;

export function initializeFeature() {
    if (!isInitialized) {
        isInitialized = true;
        initTimeStamp = new Date().toISOString();

        console.log(`Feature B is initialized`);
    }
    console.log(`Feature is already initialized`);
}