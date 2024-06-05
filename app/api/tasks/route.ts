// 関数名がHTTPメソッドと対応している。POSTやPUTもいける

import {NextResponse} from "next/server";

export interface Task {
  id: number;
  name: string;
}

const tasks: Task[] = [
  {id: 1, name: "プログラミング"},
  {id: 2, name: "ランニング"},
];

const sleep = (ms: number): Promise<void> =>
  new Promise((resolve) => setTimeout(resolve, ms));

export const GET = async () => {
  await sleep(3000);
  return NextResponse.json({tasks}, {status: 200});
};

// 更新が多いアプリの場合は以下を使って動的に更新する
export const dynamic = "force-dynamic";
