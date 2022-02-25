// Lets Try to understand Pick, basically it chooses some types of our choice to be included in new type which we want to create out of prdefined type
// implementation example
var foo = function (init, Options) {
    if (Options.width !== undefined) {
        init.width = Options.width;
        return init;
    }
    else if (Options.height !== undefined) {
        init.height = Options.height;
        return init;
    }
    else if (Options.color !== undefined) {
        init.color = Options.color;
        return init;
    }
    else {
        return init;
    }
};
// curry function
var foo2 = function (init) { return function (Options) {
    if (Options.width !== undefined) {
        init.width = Options.width;
        return init;
    }
    else if (Options.height !== undefined) {
        init.height = Options.height;
        return init;
    }
    else if (Options.color !== undefined) {
        init.color = Options.color;
        return init;
    }
    else {
        return init;
    }
}; };
var INIT_OPTIONS = {
    width: 640,
    height: 480,
    color: '#00FF00'
};
// implementation 
var foo3 = function (init) { return function (Options) {
    if (Options.width !== undefined) {
        init.width = Options.width;
        return init;
    }
    else if (Options.height !== undefined) {
        init.height = Options.height;
        return init;
    }
    else if (Options.color !== undefined) {
        init.color = Options.color;
        return init;
    }
    else {
        return init;
    }
}; };
console.log(foo3(INIT_OPTIONS)({}));
console.log(foo3(INIT_OPTIONS)({ height: 20 }));
