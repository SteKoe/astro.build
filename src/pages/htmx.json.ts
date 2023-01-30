import type {APIRoute} from "astro";

export const post: APIRoute = async ({ request }) => {
    if (request.headers.get("Content-Type") === "application/json") {
        const body = await request.json();
        console.log(body);
        const name = body.name;
        return new Response(`User entered <i>${name}</i>`, {
            status: 200
        })
    }
    return new Response(null, { status: 400 });
}