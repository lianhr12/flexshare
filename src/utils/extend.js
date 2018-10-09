'use strict';

export function extend(target, object){
    for (let attr in object) {
        target[attr] = object[attr];
    }
    return target;
}