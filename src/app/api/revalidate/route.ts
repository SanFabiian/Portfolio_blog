import { revalidateTag } from "next/cache";
import { type NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const secret = req.nextUrl.searchParams.get("secret");

  if (secret !== process.env.SANITY_WEBHOOK_SECRET) {
    return NextResponse.json({ message: "Invalid secret" }, { status: 401 });
  }

  const body = await req.json().catch(() => null);
  const docType: string | undefined = body?._type;

  // Map Sanity document types to cache tags
  const tagMap: Record<string, string[]> = {
    siteSettings: ["site-settings"],
    project: ["projects"],
    post: ["posts"],
    about: ["about"],
  };

  const tags = docType ? (tagMap[docType] ?? ["all"]) : ["all"];
  tags.forEach((tag) => revalidateTag(tag, {}));

  return NextResponse.json({ revalidated: true, tags });
}
