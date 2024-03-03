import React, {FC, ReactNode, useEffect, useState} from 'react'
import {Header} from '../header/Header'
import {Sidebar} from '../sidebar/Sidebar'
import s from './Layout.module.css'


type PropsType = {
	children: ReactNode
}

export const Layout: FC<PropsType> = ({children}) => {
	const [open, setOpen] = useState(false)
	const handleClose = () => setOpen(false)
	const handleOpen = () => setOpen(true)

	useEffect(() => {
		open && (document.body.style.overflow = 'hidden')
		!open && (document.body.style.overflow = 'unset')
	}, [open]) // отключает прокрутку при открытом меню

	return (
		<>
			<Sidebar open={open} handleClose={handleClose}/>
			<div className={s.layout_container}>
				<Header handleOpen={handleOpen}/>
				<div className={s.pages_container}>
					{/*страницы*/}
					{children}
				</div>
			</div>

		</>
	)
}
