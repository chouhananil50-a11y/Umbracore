export const onRequest: PagesFunction = async (context) => {
  const headers = {
    'X-Content-Type-Options': 'nosniff',
    'X-Frame-Options': 'DENY',
    'Referrer-Policy': 'strict-origin-when-cross-origin',
    'Content-Type': 'application/json; charset=utf-8',
  }
  return new Response(JSON.stringify({ ok: true, path: context.request.url }), { headers })
}