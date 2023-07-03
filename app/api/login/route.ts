import { NextResponse, NextRequest } from "next/server";
export const POST = async (req: NextRequest, res: any) => {
  const { body } = req;
  return NextResponse.json({
    success: true,
    error: true,
    data: {
      name: "qwe123",
    },
  });
};
