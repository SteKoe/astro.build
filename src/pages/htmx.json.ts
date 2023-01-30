import type {APIRoute} from "astro";

export const post: APIRoute = async ({ request }) => {
    const body = await request.formData();
    console.log(body);
    const name = "body.name";

    return {
        body: `User entered <i>${name}</i>`
    }
}
