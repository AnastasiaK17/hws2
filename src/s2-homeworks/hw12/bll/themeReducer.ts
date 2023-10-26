const initState: themeStateType = {
    themeId: 1,
}

type themeStateType = {
    themeId : ThemeType
}

export type ThemeType = 1 | 2 | 3

export const themeReducer = (state = initState, action: changeThemeIdType): themeStateType => { // fix any
    switch (action.type) {
        // дописать
        case 'SET_THEME_ID': {
            debugger;
            return {...state, themeId: action.id}
        }

        default:
            return state
    }
}


type changeThemeIdType = ReturnType<typeof changeThemeId>
export const changeThemeId = (id: ThemeType) => ({ type: 'SET_THEME_ID', id } as const) // fix any
