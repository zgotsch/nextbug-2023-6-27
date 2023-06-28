import {ClientComponent} from "./client";
import {Suspense} from "react";

export default function Home({searchParams}: {searchParams: string}) {
  return (
    <Suspense>
      <ClientComponent />
    </Suspense>
  );
}
