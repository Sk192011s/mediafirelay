import { serve } from "https://deno.land/std@0.200.0/http/server.ts";

serve(async (req) => {
  const url = new URL(req.url);
  if(url.pathname === "/" || url.pathname === "/index.html"){
    try{
      const html = await Deno.readTextFile("./index.html");
      return new Response(html, { headers: { "content-type":"text/html; charset=utf-8" }});
    }catch{
      return new Response("index.html not found", { status: 404 });
    }
  }
  return new Response("Not found", { status: 404 });
});
