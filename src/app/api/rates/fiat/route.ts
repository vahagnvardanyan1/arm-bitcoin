import { NextResponse } from "next/server";

import { CBA_API_URL } from "@/constants/configs";

interface CbaResponse {
  USD: { rate: string };
  RUB: { rate: string };
}

export const GET = async () => {
  try {
    const response = await fetch(CBA_API_URL, { next: { revalidate: 30 } });

    if (!response.ok) {
      throw new Error("CBA API error");
    }

    const data: CbaResponse = await response.json();

    const usdAmd = parseFloat(data.USD.rate);
    const rubAmd = parseFloat(data.RUB.rate);

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
