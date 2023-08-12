const stack = [];

const addToStack = (...middlewares) => {
  stack.push(...middlewares);
};

const run = (index, context) => {
  const middleware = stack[index];
  if (middleware) {
    middleware(context, () => {
      run(index + 1, context);
    });
  }
};

const execute = (context) => {
  const initialIndex = 0;

  run(initialIndex, context);
};

export { addToStack, execute };
