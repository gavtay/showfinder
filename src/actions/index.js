export const scrollrightpop = () => {
    return {
        type: 'SCROLLRIGHTPOP'
    };
};
export const scrollleftpop = () => {
    return {
        type: 'SCROLLLEFTPOP'
    };
};
export const scrollrightnew = () => {
    return {
        type: 'SCROLLRIGHTNEW'
    };
};
export const scrollleftnew = () => {
    return {
        type: 'SCROLLLEFTNEW'
    };
};
export const scrollrightmost = () => {
    return {
        type: 'SCROLLRIGHTMOST'
    };
};
export const scrollleftmost = () => {
    return {
        type: 'SCROLLLEFTMOST'
    };
};

export const showdetails = (showObj) => {
    return {
        type: 'SHOWDETAILS',
        object: showObj
    };
};
export const closedetails = () => {
    return {
        type: 'CLOSEDETAILS'
    };
};

export const updateSearch = (event) => {
    return {
        type: 'UPDATESEARCH',
        searchEvent: event
    };
};