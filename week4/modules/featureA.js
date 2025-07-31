let isInitialized = false;
let initTimeStamp = null;

export function initializeFeature() {
    if (!isInitialized) {
        isInitialized = true;
        initTimeStamp = new Date().toISOString();

        console.log(`Feature A is initialized`);
        return;
    }
    console.log(`Feature is already initialized`);
}

