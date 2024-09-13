"use client";

import { useQuery } from "@tanstack/react-query";

export default function Page() {
  const { data } = useQuery({
    queryKey: ["/api/post"],
    queryFn: async () => {
      const res = await fetch("/api/post");
      return res.json();
    },
  });
  return <div className="">페이지</div>;
}
