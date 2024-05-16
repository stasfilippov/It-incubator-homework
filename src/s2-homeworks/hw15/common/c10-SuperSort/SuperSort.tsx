import React from 'react'
import downIcon from '../../assets/arrowDown.png'
import upIcon from '../../assets/arrowUp.png'

const noneIcon =
	'https://cdn.icon-icons.com/icons2/906/PNG/512/sort_icon-icons.com_69899.png'

export type SuperSortPropsType = {
	id?: string
	sort: string
	value: string
	onChange: (newSort: string) => void
}

export const pureChange = (sort: string, down: string, up: string) => {
	switch (sort) {
		case '':
			return down
		case down:
			return up
		case up:
			return ''
		default:
			return down
	}
}

const SuperSort: React.FC<SuperSortPropsType> = ({
	sort,
	value,
	onChange,
	id = 'hw15',
}) => {
	const up = '0' + value
	const down = '1' + value

	const onChangeCallback = () => {
		onChange(pureChange(sort, down, up))
	}

	const icon = sort === down ? downIcon : sort === up ? upIcon : noneIcon

	return (
		<span id={id + '-sort-' + value} onClick={onChangeCallback}>
			<div
				style={{
					width: '20px',
					height: '20px',
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'center',
				}}
			>
				<img
					style={{ width: '100%', height: '100%' }}
					src={icon}
					alt='icon'
					id={id + '-icon-' + sort}
				/>
			</div>
		</span>
	)
}

export default SuperSort
