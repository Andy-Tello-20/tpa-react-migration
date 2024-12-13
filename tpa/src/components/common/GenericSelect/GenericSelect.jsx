import React, { useState, useEffect } from 'react';
import Select from 'react-select';
import './genericSelect.css';

// Usamos React.forwardRef para que el componente pueda recibir refs
export const GenericSelect = React.forwardRef(({
  onSelectChange,
  placeholder,
  multi = false,
  values,
  name,
  closeMenu = true,
  setValue,
}, ref) => {


  const [selectedOption, setSelectedOption] = useState(null)

  useEffect(() => {
    if (onSelectChange) {
      onSelectChange(selectedOption)
    }
  }, [selectedOption, onSelectChange])

  const handleChange = (selectedOption) => {
    setSelectedOption(selectedOption);

    //👉 Verificamos si es un array de objetos
    if (Array.isArray(selectedOption)) {
      const selectedValues = selectedOption.map(i => i.value)
      setValue(name, selectedValues)
    } else {
      // Para valores únicos (o null), usamos directamente el valor
      setValue(name, selectedOption?.value || null)
    }

  };


  let options


  if (values) {
    options = values.map((i) => {
      if (i.name && i.description.length > 0) {
        //👉 si existe name pero con prop .length > 0
        return {
          value: `${i.name} (${i.description})`,
          label: `${i.name} (${i.description})`,
        }

      } else if (i.name && i.description?.length === 0) {
        //👉 si existe name pero con prop .length === 0
        return {
          value: i.name,
          label: i.name
        }

      } else {
        //👉 si solo existe description
        return {
          value: i.description,
          label: i.description
        }
      }
    })

    // console.log('options are:', options);
  }



  return (
    <div className="App">
      <Select
        name={name}
        defaultValue={selectedOption}
        onChange={handleChange}
        options={options}
        placeholder={placeholder}
        isMulti={multi}
        closeMenuOnSelect={closeMenu}
        ref={ref}
      />
    </div>
  )
})
