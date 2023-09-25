import { NextResponse } from "next/server";
import { revalidateTag } from "next/cache";
import { RevalidateTag } from "@/types/enums";
import { deleteDirectory } from "@/lib/services/albums/server-methods";
import { NotFoundResponse } from "@/lib/next-responses";
import { AlbumDb } from "@/db/handlers/album";
import { CreateAlbum } from "@/types/db/album";

export async function GET(request: Request, { params }: ParamsWithUUID) {
  const id = params.uuid;
  const album = await AlbumDb.getOneWithRelations(id);
  console.log(album);
  if (!album) return NotFoundResponse("Album not found");
  return NextResponse.json(album);
}

export async function PUT(request: Request, { params }: ParamsWithUUID) {
  const id = params.uuid;
  const data: Omit<CreateAlbum, "id"> = await request.json();
  const album = await AlbumDb.update(id, data);
  if (!album) return NotFoundResponse("Album not found");
  revalidateTag(RevalidateTag.ALBUMS);
  return NextResponse.json(album);
}
export async function DELETE(request: Request, { params }: ParamsWithUUID) {
  const id = params.uuid;
  await deleteDirectory(id);
  const album = await AlbumDb.delete(id);
  if (!album) return NotFoundResponse("Album not found");
  revalidateTag(RevalidateTag.ALBUMS);
  return NextResponse.json(album);
}
