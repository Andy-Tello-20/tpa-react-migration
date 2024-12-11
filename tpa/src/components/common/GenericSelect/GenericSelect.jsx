import React, { useState } from 'react';
import Select from 'react-select';
import './genericSelect.css'


export const GenericSelect = ({ placeholder, multi = false, values, prop, name, closeMenu = true }) => {

  console.log('values are: ', values, 'prop es: ', prop)
  const [selectedOption, setSelectedOption] = useState(null);

  let options

  if (values) {
    options = values.map((i) => {
      if (name && i[prop]?.length > 0) {
        //👉 si existe name pero con prop .length > 0
        return {
          value: `${i[name]} (${i[prop]})`,
          label: `${i[name]} (${i[prop]})`
        }

      } else if (name && i[prop]?.length === 0) {
        //👉 si existe name pero con prop .length === 0
        return {
          value: i[name],
          label: i[name]
        }

      } else {
        //👉 si solo existe prop
        return {
          value: i[prop],
          label: i[prop]
        }
      }
    });

    console.log('options are:', options);
  }


  return (

    <div className="App">
      <Select
        defaultValue={selectedOption}
        onChange={setSelectedOption}
        options={options}
        placeholder={placeholder}
        isMulti={multi}
        closeMenuOnSelect={closeMenu}


      />
    </div>
  )
}



