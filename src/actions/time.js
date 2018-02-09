// Set Time (Start or End)
export const setTime = ( value ) => {
  return {
    type: 'SET_TIME',
		options: {
			value,
		}
  }
}
