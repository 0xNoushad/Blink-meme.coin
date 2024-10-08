import { ACTIONS_CORS_HEADERS, ActionsJson } from "@solana/actions";

export const GET = async () => {
  const payload: ActionsJson = {
    rules: [
      {
        pathPattern: "/*",
        apiPath: "/api/actions/meme",
      },
      {
        pathPattern: "/api/actions/meme",
        apiPath: "/api/actions/meme",
      },
    ],
  };

  return new Response(JSON.stringify(payload), {
    headers: ACTIONS_CORS_HEADERS,
  });
};

// Include OPTIONS method to ensure CORS works for Blinks
export const OPTIONS = GET;
