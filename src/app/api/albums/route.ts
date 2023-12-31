import { NextResponse } from "next/server";
import { revalidatePath } from "next/cache";
import { createDirectory } from "@/lib/services/albums/server-methods";
import { ServerErrorResponse } from "@/lib/next-responses";
import { CreateAlbum } from "@/types/db/album";
import { AlbumDb } from "@/db/handlers/album";
import { RevalidatePath } from "@/types/enums/revalidate-path";

export async function GET() {
  const albums = await AlbumDb.findAll();
  return NextResponse.json(albums);
}

export async function POST(request: Request) {
  const data: Omit<CreateAlbum, "id"> = await request.json();
  const result = await AlbumDb.create(data);
  if (!result) return ServerErrorResponse("Album could not be created");
  await createDirectory(result.id);
  revalidatePath(RevalidatePath.CLIENT_ALBUMS);
  revalidatePath(RevalidatePath.ADMIN_ALBUMS);
  return NextResponse.json(result);
}
