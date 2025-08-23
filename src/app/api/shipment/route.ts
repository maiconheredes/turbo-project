import { NextRequest, NextResponse } from 'next/server';
import { createShipment } from '../../../lib/easypost';
import { IAddress, IParcel } from '@easypost/api';

interface ShipmentRequest {
  from: IAddress;
  to: IAddress;
  parcel: IParcel;
}

export async function POST(req: NextRequest) {
  const data: ShipmentRequest = await req.json();
  const shipment = await createShipment(data.from, data.to, data.parcel);

  return NextResponse.json(shipment);
};
