export default {
  async fetch(request, env, ctx) {
    
    const typliResponse = await env.TYPLI_API.fetch(request);
    
    // Возвращаем ответ боту
    return typliResponse;
  }
}