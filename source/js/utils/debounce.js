const debounce = (func, delay) => {
  let inDebounce;
  return function () {
    // eslint-disable-next-line no-invalid-this
    const context = this;
    // eslint-disable-next-line prefer-rest-params
    const args = arguments;
    clearTimeout(inDebounce);
    inDebounce = setTimeout(() => func.apply(context, args), delay);
  };
};

export {debounce};
