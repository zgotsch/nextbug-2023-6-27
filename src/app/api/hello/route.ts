export function GET() {
  // @ts-expect-error these types are always behind
  return Response.json("Hi");
}
