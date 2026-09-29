import handler, { createServerEntry } from "@tanstack/react-start/server-entry";
import { withGa4 } from "./ga4";

// Wraps the normal TanStack Start server handler. The site itself is rendered
// exactly as before; only the HTML response is post-processed to add the GA4
// tag that belongs to the requested hostname.
export default createServerEntry({
  async fetch(request, ...rest) {
    const response = await (handler.fetch as any)(request, ...rest);
    return withGa4(request, response);
  },
});
