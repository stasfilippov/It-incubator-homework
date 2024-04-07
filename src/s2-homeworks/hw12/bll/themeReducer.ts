const initState = {
	themeId: 1,
}

type IniteStateType = typeof initState
export const themeReducer = (state = initState, action: ActionsType): IniteStateType => { // fix any
	switch (action.type) {
		case 'SET_THEME_ID':
			return {...state, themeId: action.id}
		default:
			return state
	}
}

type ActionsType = ChangeThemeActionType


export const changeThemeId = (id: number) => ({type: 'SET_THEME_ID', id} as const) // fix any

type ChangeThemeActionType = ReturnType<typeof changeThemeId>
