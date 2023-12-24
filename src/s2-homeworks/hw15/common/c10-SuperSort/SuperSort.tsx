import React from 'react'

// добавить в проект иконки и импортировать
const downIcon =  'https://icon-library.com/images/down-icon/down-icon-15.jpg'
const upIcon = 'https://icon-library.com/images/up-arrow-icon-png/up-arrow-icon-png-21.jpg'
const noneIcon = 'https://icon-library.com/images/up-and-down-icon/up-and-down-icon-11.jpg'



export type SuperSortPropsType = {
    id?: string
    sort: string
    value: string
    onChange: (newSort: string) => void
}

export const pureChange = (sort: string, down: string, up: string) => {
    // пишет студент, sort: (click) => down (click) => up (click) => '' (click) => down ...
  if (sort === down) {
    return up
  } else if (sort === up) {
    return ''
  } else {
    return down
  }
}

const SuperSort: React.FC<SuperSortPropsType> = (
    {
        sort, value, onChange, id = 'hw15',
    }
) => {
    const up = '0' + value
    const down = '1' + value

    const onChangeCallback = () => {
        onChange(pureChange(sort, down, up))
    }

    const icon = sort === down
        ? downIcon
        : sort === up
            ? upIcon
            : noneIcon

    return (
        <span
            id={id + '-sort-' + value}
            onClick={onChangeCallback}
        >
            <img
                id={id + '-icon-' + sort}
                src={icon}
                height = {'20px'}
                width = {'15px'}
            />
        </span>
    )
}

export default SuperSort
