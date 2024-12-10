import React from "react";

const elements= [
    {
      "type": "h1",
      "props": { "className": "title" },
      "children": "Título Principal"
    },
    {
      "type": "p",
      "props": { "className": "description" },
      "children": "Este es un párrafo de ejemplo."
    },
    {
      "type": "button",
      "props": { "onClick": "handleClick", "className": "btn" },
      "children": "Haz clic aquí"
    }
  ]

export const GenericComponent = () => {
  const handleClick = () => {
    alert("Botón clickeado!")
  };

  return (
    <>
      {elements.map((element, index) => {
        const { type, props, children } = element
        
        const HTMLtag = type // Dinámicamente selecciona el tipo de elemento

        // Mapea las props dinámicamente, manejando funciones si es necesario
        const resolvedProps = {
          ...props,
          onClick: props.onClick === "handleClick" ? handleClick : props.onClick,
        }

     

        return (
          <HTMLtag key={index} {...resolvedProps}>
            {children}
          </HTMLtag>
        );
      })}
    </>
  );
};

