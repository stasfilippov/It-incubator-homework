import React from 'react'
import s from '../../../s1-main/App.module.css'
import HW7 from '../../hw07/HW7';
import HW6 from '../../hw06/HW6';
import HW8 from '../../hw08/HW8';
// import HW6 from '../../hw06/HW6'
// import HW7 from '../../hw07/HW7'
// import HW8 from '../../hw08/HW8'
// import HW9 from '../../hw09/HW9'

function Junior() {
	return (
		<div id={'hw5-page-junior'} className={s.hw_wrapper_custom}>
			<HW6/>
			<HW7/>
			<HW8/>
			{/*<HW9 />*/}
		</div>
	)
}

export default Junior
