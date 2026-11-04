export async function GET(request: Request): Promise<Response> {
  return Response.redirect(new URL("/sitemap.xml", request.url), 308);
}
