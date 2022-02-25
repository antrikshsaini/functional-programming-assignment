/**
 *
 *  Pick
 * 
 */

// Lets Try to understand Pick, basically it chooses some types of our choice to be included in new type which we want to create out of prdefined type

// Example

interface State {
    userId: string;
    pageTitle: string;
    recentFiles: string[];
    pageContents: string;
}

// suppose now we want to create new type which include only pageTitle, recentFiles and pageContents
// through mapped type , declaration below can only be used with "type" not "interface"

type StateWithoutUserId = {
    [k in 'pageTitle' | "recentFiles" | "pageContents"]: State[k]
}

// define Pick , a useful fuction which does the same thing above, just in a cool way, a type by picking the set of properties Keys

type _Pick<T, K extends keyof T> = { [k in K]: T[k] }

// lets Implement Pick 

type _StateWithoutUserId = _Pick<State, "pageContents" | "pageTitle" | "recentFiles">

// cannot implement through interfaces 

/**
interface __StateWithoutUserId {
    _Pick<State, "pageContents" | "pageTitle" | "recentFiles">
}
*/

// Extract : take out types assignable to K from T
/*
 * If we want to find the shared keys between these interfaces, we can combine
 * keyof with Extract. keyof will give us a union string of all the keys, and
 * Extract will return the shared values.
 */

interface State2 {
    pageTitle: string;
    recentFiles: string[];
    pageContents: string;
}

type _Extract<T, K> = T extends K ? T : never;

type __StateWithoutUserId = _Extract<keyof State, keyof State2>; // type __StateWithoutUserId = "pageTitle" | "recentFiles" | "pageContents"

type __StateWithoutUserId2 = _Extract<keyof State, "userId" | "recentFiles" | "pageContents">; // type __StateWithoutUserId2 = "pageTitle" | "recentFiles" | "pageContents"

type IntersectionType<T, U> = { [K in _Extract<keyof T, keyof U>]: T[K] } // another way of Pick

type _StateWithoutUserId3 = IntersectionType<State, State2>
/**
 * 
 * Omit
 * 
 */

/** Using same type State*/
// Create new type which returns all properties except recentFiles
// lets define Exclude first

type _Exclude<T, K> = T extends K ? never : T

type omitRecentFiles = _Exclude<keyof State, "recentFiles">

type _Omit<T, K> = Pick<T, _Exclude<keyof T, K>>;

type omitRecentFiles2 = _Omit<State, "recentFiles">

type omitRecentFiles3 = _Omit<State, keyof State2>

/**
 * 
 * Partial with example
 * 
 */

interface Options {
    width: number;
    height: number;
    color: string;
}

interface OptionsUpdate {
    width?: number;
    height?: number;
    color?: string;
}

// We can use mapped types also to define OptionsUpdate, let's try

type _OptionsUpdate = { [k in keyof Options]?: Options[k] }

// or

type OptionsKeys = keyof Options

type __OptionsUpdate = { [k in OptionsKeys]?: Options[k] }

// implementation example

const foo = (init: Options, Options: __OptionsUpdate) => {
    if (Options.width !== undefined) {
        init.width = Options.width
        return init
    } else if (Options.height !== undefined) {
        init.height = Options.height
        return init
    } else if (Options.color !== undefined) {
        init.color = Options.color
        return init
    } else {
        return init
    }
}

// curry function
const foo2 = (init: Options) => (Options: __OptionsUpdate) => {
    if (Options.width !== undefined) {
        init.width = Options.width
        return init
    } else if (Options.height !== undefined) {
        init.height = Options.height
        return init
    } else if (Options.color !== undefined) {
        init.color = Options.color
        return init
    } else {
        return init
    }
}

const INIT_OPTIONS: Options = {
    width: 640,
    height: 480,
    color: '#00FF00',
};

// console.log(foo(INIT_OPTIONS, { width: 700 }))

// console.log(foo2(INIT_OPTIONS)({ width: 700 })) // { width: 700, height: 480, color: '#00FF00' }

/** Partial Utility Type is similar to _OptionUpdate 
 * type _OptionsUpdate = { [k in keyof Options]?: Options[k] }
*/

type ___OptionsUpdate = Partial<Options>

// implementation 

const foo3 = (init: Options) => (Options: ___OptionsUpdate) => {
    if (Options.width !== undefined) {
        init.width = Options.width
        return init
    } else if (Options.height !== undefined) {
        init.height = Options.height
        return init
    } else if (Options.color !== undefined) {
        init.color = Options.color
        return init
    } else {
        return init
    }
}

// console.log(foo3(INIT_OPTIONS)({}))
// console.log(foo3(INIT_OPTIONS)({ height: 20 }))

/**
 * Deliverable 4
 */

type X = {
    x: string,
    y: string,
    z: string
}

type Y = X & { s: number, t: number, u: number }

type YnotX = _Exclude<keyof Y, keyof X>  // type YnotX = "s" | "t" | "u"

type _YnotX = _Omit<Y, keyof X>
/** Output
 * 
 * type _YnotX = {
    s: number;
    t: number;
    u: number;
    }
 */