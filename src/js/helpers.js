export const get = (selector, node = undefined) => (node && node.querySelector(selector)) || document.querySelector(selector);

export const getAll = (selector, node = undefined) => (node && node.querySelectorAll(selector)) || document.querySelectorAll(selector);

export const element = tag => document.createElement(tag);