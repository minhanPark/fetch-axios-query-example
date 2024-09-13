import { NextResponse } from "next/server";

import { CommonResponse } from "../shared/types";

type Post = {
  id: number;
  title: string;
  content: string;
};

const post: Post[] = [
  {
    id: 1,
    title: "title1",
    content: "content1",
  },
  {
    id: 2,
    title: "title2",
    content: "content2",
  },
];

export function GET(): NextResponse<CommonResponse> {
  return NextResponse.json({
    ok: true,
    content: post,
  });
}
