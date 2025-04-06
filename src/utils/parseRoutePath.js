export function parseRoutePath(path) {
  // esta função extrai os parâmetros de rota de uma string de caminho
  const routeParametersRegex = /:([a-zA-Z]+)/g;
  //este regex vai encontrar todos os parâmetros de rota que começam com ":" e são seguidos por letras
  const params = path.replaceAll(routeParametersRegex, "(?<$1>[a-z0-9-_]+)");
  //este regex vai substituir os parâmetros de rota encontrados por uma expressão regular que captura letras, números, hífens e sublinhados
  const pathRegex = new RegExp(`${params}(?<query>\\?(.*))?$`);

  return pathRegex;
}
