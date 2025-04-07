function parsearUrl(inputUrl) {
    try {

      const parsedUrl = new URL(inputUrl);
  
      const parametros = {};
      parsedUrl.searchParams.forEach((value, key) => {
        parametros[key] = value;
      });
  
      return {
        host: `${parsedUrl.protocol}//${parsedUrl.host}`,
        pathname: parsedUrl.pathname,
        parametros: parametros
      };
    } catch (error) {

      console.error("Error al parsear la URL:", error.message);
    }
  }
  
  export default parsearUrl;
