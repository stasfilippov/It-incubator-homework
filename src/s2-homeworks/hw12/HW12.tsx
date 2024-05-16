import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import s2 from '../../s1-main/App.module.css'
import SuperSelect from '../hw07/common/c5-SuperSelect/SuperSelect'
import { AppStoreType } from '../hw10/bll/store'
import { changeThemeId } from './bll/themeReducer'
import s from './HW12.module.css'

/*
* 1 - в файле themeReducer.ts написать нужные типы вместо any, дописать редьюсер
* 2 - получить themeId из редакса
! 3 - дописать тип и логику функции change
! 4 - передать пропсы в SuperSelect
* */

const themes = [
	{ id: 1, value: 'light' },
	{ id: 2, value: 'blue' },
	{ id: 3, value: 'dark' },
]

const HW12 = () => {
	// взять ид темы из редакса
	const themeId = useSelector<AppStoreType, number>(
		state => state.theme.themeId
	)
	const dispatch = useDispatch()
	const themes = [
		{ id: 1, value: 'light' },
		{ id: 2, value: 'blue' },
		{ id: 3, value: 'dark' },
	]
	const change = (id: any) => {
		// дописать функцию
		dispatch(changeThemeId(id))
	}

	useEffect(() => {
		document.documentElement.dataset.theme = themeId + ''
	}, [themeId])

	return (
		<div id={'hw12'} style={{ color: themeId === 3 ? '#fff' : '#000' }}>
			<div id={'hw12-text'} className={s2.hwTitle}>
				Homework #12
			</div>
			<div className={s2.hw}>
				<span className={s2.text}>Выберите тему</span>
				<SuperSelect
					id={'hw12-select-theme'}
					className={s.select}
					// сделать переключение тем
					onChangeOption={change}
					options={themes}
				/>
			</div>
		</div>
	)
}

export default HW12
