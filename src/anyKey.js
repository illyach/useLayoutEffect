import React, {useEffect, useState} from "react";

const useAnyKeyToRender = () => {
    const [ , forceRender] = useState();

    useEffect(() => {
      window.addEventListener("keydown", forceRender);
      return () => window.removeEventListener("keydown", forceRender);//функция очистки
    }, []);

  }

  export default useAnyKeyToRender;