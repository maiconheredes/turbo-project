import EasyPost, { IAddress, IParcel } from '@easypost/api';

const api = new EasyPost(process.env.EASYPOST_API_KEY!);

export async function createShipment(from: IAddress, to: IAddress, parcel: IParcel) {
  const shipment = await api.Shipment.create({
    to_address: to,
    from_address: from,
    parcel: parcel,
  });

  return shipment;
};
