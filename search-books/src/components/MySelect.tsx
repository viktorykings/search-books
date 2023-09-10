import React from 'react';

interface SelectProps{
    options: string[],
    label: string,
    id: string,
    handleSelect:  (e: React.ChangeEvent<HTMLSelectElement>) => void
}

export const MySelect = ({options, label, id, handleSelect}: SelectProps) => {
  return (
    <>
    <label htmlFor={id}>{label}</label>
    <select name={id} id={id} onChange={handleSelect}>
        {options.map(el => <option value={el}>{el}</option>)}
    </select>
    </>
  )
}
