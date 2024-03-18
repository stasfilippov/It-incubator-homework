import React from 'react'
import {Slider, SliderProps} from '@mui/material'

const SuperRange: React.FC<SliderProps> = (props) => {
	return (
		<Slider
			sx={{ // стили для слайдера // пишет студент
				color: '#0c2',
				maxWidth: '147px',
				'& .MuiSlider-thumb': {
					backgroundColor: '#fff',
					border: '1px solid currentColor',
					'&:hover': {
						boxShadow: '0 0 0 8px rgba(58, 133, 137, 0.16)',
					},
				},

			}}
			{...props} // отдаём слайдеру пропсы если они есть (value например там внутри)
		/>
	)
}

export default SuperRange
