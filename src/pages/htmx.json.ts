import type {APIRoute} from "astro";

export const post: APIRoute = async ({ request }) => {
    const formData = await request.formData();

    return {
        body: `User entered <i>${formData.get("response")}</i>`
    }
}
