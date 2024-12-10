
import { useState } from 'react';


export const useCustomState = () => {

    const [state, setState] = useState(false)

    const toggleState = () => {
        setState(!state)
    };

  return {state,toggleState}
}
