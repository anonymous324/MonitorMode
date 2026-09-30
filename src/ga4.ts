// Multi-domain GA4 injection.
// One Worker serves many domains; the hostname of each request decides which
// GA4 Measurement ID (if any) gets injected into the HTML <head>.

export const GA4_IDS: Record<string, string> = {
  "925615.com": "G-RVMJVNNSE5",
  "www.925615.com": "G-RVMJVNNSE5",

  "csg-us88.com": "G-YDCH9RT5BF",
  "www.csg-us88.com": "G-YDCH9RT5BF",

  "bokepae.com": "G-D0SZX31G5K",
  "www.bokepae.com": "G-D0SZX31G5K",

  "bokeppo.com": "G-QJKP02VK9J",
  "www.bokeppo.com": "G-QJKP02VK9J",

  "hippodrome-us.com": "G-69WTVRCR87",
  "www.hippodrome-us.com": "G-69WTVRCR87",

  "66waji.com": "G-9SZNKXEENP",
  "www.66waji.com": "G-9SZNKXEENP",

  "mobilespying.com": "G-H38K8X957D",
  "www.mobilespying.com": "G-H38K8X957D",
};

const GA_ID_PATTERN = /^G-[A-Z0-9]+$/;

// Anything that looks like an existing GA/gtag implementation in origin HTML.
const EXISTING_GA_SRC = /googletagmanager\.com\/gtag\/js|google-analytics\.com\/(analytics|ga)\.js/i;
const EXISTING_GA_INLINE =
  /googletagmanager\.com\/gtag\/js|function\s+gtag\s*\(|gtag\s*\(\s*['"](?:config|js)['"]/i;

const INJECTED_MARKER = "data-ga4-injected";

export function getGa4Id(hostname: string): string | null {
  const host = hostname.toLowerCase().replace(/\.$/, "");
  if (!Object.prototype.hasOwnProperty.call(GA4_IDS, host)) return null;
  const id = GA4_IDS[host];
  return GA_ID_PATTERN.test(id) ? id : null;
}

function buildSnippet(id: string): string {
  return (
    `<script async src="https://www.googletagmanager.com/gtag/js?id=${id}" ${INJECTED_MARKER}></script>` +
    `<script ${INJECTED_MARKER}>` +
    `window.dataLayer=window.dataLayer||[];` +
    `function gtag(){dataLayer.push(arguments);}` +
    `gtag('js',new Date());` +
    `gtag('config','${id}');` +
    `</script>`
  );
}

function isHtml(response: Response): boolean {
  const type = response.headers.get("content-type") || "";
  return /text\/html|application\/xhtml\+xml/i.test(type);
}

export async function withGa4(request: Request, response: Response): Promise<Response> {
  let hostname: string;
  try {
    hostname = new URL(request.url).hostname;
  } catch {
    return response;
  }

  const id = getGa4Id(hostname);
  if (!id) return response; // unknown host: leave untouched
  if (!isHtml(response)) return response; // only HTML
  if (!response.body) return response; // HEAD / 204 / 304 etc.
  if (response.status === 101) return response;

  const snippet = buildSnippet(id);

  const rewriter = new HTMLRewriter()
    // Inject once, at the very start of <head>.
    .on("head", {
      element(el: any) {
        el.prepend(snippet, { html: true });
      },
    })
    // Strip any GA/gtag that the origin HTML already ships, so there is exactly
    // one GA4 tag (ours) and never another domain's ID.
    .on("script", {
      element(el: any) {
        const src = el.getAttribute("src");
        if (src && EXISTING_GA_SRC.test(src)) el.remove();
      },
      text: makeInlineTextHandler(),
    });

  const out = rewriter.transform(response);
  const headers = new Headers(out.headers);
  // Body changes, so a strong validator is no longer accurate.
  const etag = headers.get("etag");
  if (etag && !etag.startsWith("W/")) headers.set("etag", `W/${etag}`);
  return new Response(out.body, {
    status: out.status,
    statusText: out.statusText,
    headers,
  });
}

// Inline <script> text arrives in chunks. Buffer per script; drop it if it is a
// GA/gtag bootstrap, otherwise re-emit it byte-for-byte.
function makeInlineTextHandler() {
  let buffer = "";
  return (chunk: any) => {
    buffer += chunk.text;
    chunk.remove();
    if (!chunk.lastInTextNode) return;
    const content = buffer;
    buffer = "";
    if (EXISTING_GA_INLINE.test(content)) return; // drop existing GA
    chunk.replace(content, { html: true }); // raw text inside <script>
  };
}
