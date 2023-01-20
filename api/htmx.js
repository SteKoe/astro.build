export const config = {
    runtime: 'edge',
};

export default (req) => {
    const prompt = req.headers.get("hx-prompt");
    return new Response(`User entered <i>${prompt}</i>`);
};