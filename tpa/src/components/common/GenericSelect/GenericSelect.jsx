import React, { useState } from 'react';
import Select from 'react-select';
import './genericSelect.css'


export const GenericSelect = ({ placeholder, multi = false, values, prop }) => {

  const [selectedOption, setSelectedOption] = useState(null);

  let opciones

  if (values) {
    opciones = values.map((i) => ({
      value: i[prop],
      label: i[prop],
    }))

  }

  return (

    <div className="App">
      <Select
        defaultValue={selectedOption}
        onChange={setSelectedOption}
        options={opciones}
        placeholder={placeholder}
        isMulti={multi}
        closeMenuOnSelect={false}


      />
    </div>
  )
}



