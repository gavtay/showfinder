export const showcreateprofile = () => {
    return {
        type: 'SHOWCREATEPROFILE'
    }
}

export const profileinput = (event) => {
    return {
        type: 'PROFILEINPUT',
        event: event
    }
}
export const clearprofileinput = () => {
    return {
        type: 'CLEARPROFILEINPUT'
    }
}  

export const addprofile = (name) => {
    return {
        type: 'ADDPROFILE',
        name: name
    }
}

export const selectprofile = (profileName) => {
    return {
        type: 'SELECTPROFILE',
        name: profileName
    }
}
export const signoutprofile = () => {
    return {
        type: 'SIGNOUTPROFILE'
    }
}

export const deleteprofile = (id) => {
    return {
        type: 'DELETEPROFILE',
        remove: id
    }
}

export const showprofiledropdownmenu = () => {
    return {
        type: 'SHOWPROFILEDROPDOWNMENU'
    }
}

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