import React, { useState } from "react";
import ReactFlagsSelect from "react-flags-select";
import './countrySelect.css'

export const CountrySelect = () => {
    const [selectedCountry, setSelectedCountry] = useState("")

  //👉Etiquetas personalizadas con nombres de países y sus códigos de marcación
  const customLabels = {
    US: "(+1)",
    AR: "(+54)",
    MX: "(+52)",
    BR: "(+55)",
    ES: "(+34)"
  }

  const handleSelect = (countryCode) => {
    setSelectedCountry(countryCode)
    console.log("País seleccionado:", countryCode)
  };

  return (
    <div>

      <ReactFlagsSelect
        selected={selectedCountry}
        onSelect={handleSelect}
        countries={Object.keys(customLabels)} // Países disponibles
        customLabels={customLabels} // Etiquetas personalizadas
        placeholder="Selecciona un país"
      />
    
    </div>
  )
}
