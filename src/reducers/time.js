const time = (state = [], action) => {

	switch(action.type) {

		case 'SET_TIME' :

			const { value, type, userSet } = action.options;

			return {
				...state,
				value,
			};

		default:
			return state;
	}
}
export default time;
