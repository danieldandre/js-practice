const cache = new Map();

export function loadFeature(name) {
    if (cache.get(name)) {
        return cache.get(name);
    }
    const feature = import(`./${name}.js`);
    feature.then((module) => {
        module.initializeFeature();
        //console.log(module);
        
        cache.set(name, module);
    })
    return cache.get(name);
}