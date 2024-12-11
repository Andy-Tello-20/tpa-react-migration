import React, { useState, useEffect } from "react";
import ReactFlagsSelect from "react-flags-select";
import './countrySelect.css'

export const CountrySelect = ({placeholder, values }) => {
  const [option, setOption] = useState({})
  const [selectedCountry, setSelectedCountry] = useState('')


  useEffect(() => {
    if (values && values.length > 0) {
      const options = values.reduce((acc, i) => {
        if (i.country.alpha2Code && i.prefix) {
          acc[i.country.alpha2Code.toUpperCase()] = `(+${i.prefix})`
        }
        return acc
      }, {})
      setOption(options)
    }
  }, [values])

  //👉 Manejar la selección
  const handleSelect = (code) => {
    setSelectedCountry(code)

  };

  return (
    <div>
      <ReactFlagsSelect
        countries={Object.keys(option)} //👉 Los códigos de países generados
        customLabels={option} //👉 Los prefijos asociados a cada país
        selected={selectedCountry} //👉 Mostrar el país seleccionado
        onSelect={handleSelect} //👉 Manejar la selección
        placeholder={placeholder}
      />
    </div>
  );
}
