"use client";

import {atom, useAtomValue} from "jotai";

import {useSearchParams} from "next/navigation";
import {useMemo} from "react";

export function ClientComponent() {
  const params = useSearchParams();

  const helloAtom = useMemo(() => atom(fetch("/api/hello").then((resp) => resp.json())), []);

  const hi = useAtomValue(helloAtom);

  return <h1>{hi}</h1>;
}
