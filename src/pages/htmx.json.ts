import type {APIRoute} from "astro";
import {req} from "astro/dist/core/messages";

export const post: APIRoute = async ({ request }) => {
    const formData = await request.formData();

    return {
        body: `User entered <i>${formData.get("response")}</i>`
    }
}
