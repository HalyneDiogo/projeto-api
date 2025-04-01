export async function jsonBodyHandler(request, response) {
  const buffers = [];

  for await (const chunk of request) {
    //coleta os chunks da requisição
    buffers.push(chunk);
  }

  try {
    request.body = JSON.parse(Buffer.concat(buffers).toString());
  } catch (error) {
    request.body = null;
  }

  response.setHeader("Content-Type", "application/json"); // Define o Header de resposta como JSON
}
