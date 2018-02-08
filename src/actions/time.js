// Set Time (Start or End)
export const setTime = ( value = Date.now() ) => {
  return {
    type: 'SET_TIME',
		options: {
			value,
		}
  }
}
