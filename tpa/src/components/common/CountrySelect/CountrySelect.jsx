import React, { useState, useEffect, forwardRef, useImperativeHandle } from "react";
import ReactFlagsSelect from "react-flags-select";
import './countrySelect.css';

export const CountrySelect = forwardRef(({ placeholder, values, setValue,name }, ref) => {
  const [option, setOption] = useState({});
  const [selectedCountry, setSelectedCountry] = useState("");

  // 👉 Manejo de ref personalizado
  const innerRef = React.useRef();

  useImperativeHandle(ref, () => ({
    focus: () => {
      if (innerRef.current) {
        console.log("Enfoque manual: ", innerRef.current);
      }
    },
  }));

  useEffect(() => {
    if (values && values.length > 0) {
      const options = values.reduce((acc, i) => {
        if (i.country.alpha2Code && i.prefix) {
          acc[i.country.alpha2Code.toUpperCase()] = `(+${i.prefix})`;
        }
        return acc;
      }, {});
      setOption(options)
      console.log('options: ', options);
    }
  }, [values]);

  // Manejar la selección
  const handleSelect = (code) => {
    setSelectedCountry(code);
    console.log('setSelectedCountry: ', code)

    if (values && code.length > 0) {
      const result = values.find(item => item.country.alpha2Code === `${code.toLocaleLowerCase()}`)

      console.log(result)
      if(result){
        // const selectedPrefix = { value: result.prefix }
        setValue(name, result.country.name );
      }
      
    }
  }

  return (
    <div ref={innerRef}>
      <ReactFlagsSelect
        countries={Object.keys(option)}
        customLabels={option}
        selected={selectedCountry}
        onSelect={handleSelect}
        placeholder={placeholder}
      />
    </div>
  );
});
