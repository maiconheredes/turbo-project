import { NextRequest, NextResponse } from 'next/server';
import { createShipment } from '../../../lib/easypost';

export async function POST(req: NextRequest) {
  const data = await req.json();
  const shipment = await createShipment(data.from, data.to, data.parcel);

  return NextResponse.json(shipment);
};
