export default function robots() {
    return {
      rules: { userAgent: "*", allow: "/" },
      sitemap: "https://garrettadams.vercel.app/sitemap.xml",
    };
  }