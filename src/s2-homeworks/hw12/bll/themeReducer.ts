const initState = {
	themeId: 1,
}

type IniteStateType = {
	themeId: number
}

export const themeReducer = (state = initState, action: ActionsType): IniteStateType => { // fix any
	switch (action.type) {
		case 'SET_THEME_ID':
			return {...state}

		default:
			return state
	}
}

type ActionsType = ChangeThemeActionType

type ChangeThemeActionType = {
	type: 'SET_THEME_ID'
	id: number
}

export const changeThemeId = (id: number): ChangeThemeActionType => ({type: 'SET_THEME_ID', id} as const) // fix any
