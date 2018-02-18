const mergePropsWithAvailableProps = (availableProps, givenProps) => {
  let props = { };

  Object.keys(availableProps).forEach(key => {
    if (typeof givenProps[key] !== 'undefined') {
      if (availableProps[key] !== null) {
        props[availableProps[key]] = givenProps[key];
      } else {
        props[key] = givenProps[key];
      }
    }
  })

  return props;
}

export default mergePropsWithAvailableProps;
