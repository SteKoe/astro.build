import type {APIRoute} from "astro";

export const post: APIRoute = async ({ request }) => {
    const prompt = request.headers.get("hx-prompt");
    return {
        body: `User entered <i>${prompt}</i>`
    }
}
