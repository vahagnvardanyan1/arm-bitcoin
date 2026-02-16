import { NextResponse } from "next/server";

import { CBA_API_URL } from "@/constants/configs";

interface CbaResponse {
  [currency: string]: string | null;
}

export const GET = async () => {
  try {
    const response = await fetch(CBA_API_URL, { next: { revalidate: 30 } });

    if (!response.ok) {
      throw new Error("CBA API error");
    }

    const data: CbaResponse = await response.json();

    const usdAmd = parseFloat(data.USD ?? "0");
    const rubAmd = parseFloat(data.RUB ?? "0");

    return NextResponse.json({
      usdAmd,
      rubAmd,
      timestamp: new Date().toISOString(),
    });
  } catch {
    return NextResponse.json(
      { error: "Failed to fetch fiat rates" },
      { status: 500 },
    );
  }
};
