

export const ADRESS_FIELDS = {
  STREET1: {
    name: "street1",
    isRequired: false,
    type: "text",
  },
  CITY: {
    name: "city",
    isRequired: false,
    type: "text",
  },
  STATE: {
    name: "state",
    isRequired: false,
    type: "text",
  },
  ZIP: {
    name: "zip",
    isRequired: true,
    type: "text",
  },
  COUNTRY: {
    name: "country",
    isRequired: false,
    type: "text",
  },
  COMPANY: {
    name: "company",
    isRequired: false,
    type: "text",
  },
  PHONE: {
    name: "phone",
    isRequired: false,
    type: "text",
  },
} as const;

export const PARCEL_FIELDS = {
  LENGTH: {
    name: "length",
    isRequired: true,
    type: "number",
  },
  WIDTH: {
    name: "width",
    isRequired: true,
    type: "number",
  },
  HEIGHT: {
    name: "height",
    isRequired: true,
    type: "number",
  },
  WEIGHT: {
    name: "weight",
    isRequired: true,
    type: "number",
  },
} as const;
