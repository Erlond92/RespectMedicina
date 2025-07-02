import { createSlice } from "@reduxjs/toolkit";

type Clinic = {
  id: number;
  name: string;
  address: string;
};

const initialState: Clinic[] = [
  {
    name: "Название клиники",
    address: "Адрес клиники",
  },
  {
    name: "Название клиники",
    address: "Адрес клиники",
  },
  {
    name: "Название клиники",
    address: "Адрес клиники",
  },
  {
    name: "Название клиники",
    address: "Адрес клиники",
  },
  {
    name: "Название клиники",
    address: "Адрес клиники",
  },
  {
    name: "Название клиники",
    address: "Адрес клиники",
  },
  {
    name: "Название клиники",
    address: "Адрес клиники",
  },
  {
    name: "Название клиники",
    address: "Адрес клиники",
  },

  {
    name: "Название клиники",
    address: "Адрес клиники",
  },
  {
    name: "Название клиники",
    address: "Адрес клиники",
  },
  {
    name: "Название клиники",
    address: "Адрес клиники",
  },
  {
    name: "Название клиники",
    address: "Адрес клиники",
  },
  {
    name: "Название клиники",
    address: "Адрес клиники",
  },
  {
    name: "Название клиники",
    address: "Адрес клиники",
  },
  {
    name: "Название клиники",
    address: "Адрес клиники",
  },
  {
    name: "Название клиники",
    address: "Адрес клиники",
  },
  {
    name: "Название клиники",
    address: "Адрес клиники",
  },
  {
    name: "Название клиники",
    address: "Адрес клиники",
  },
  {
    name: "Название клиники",
    address: "Адрес клиники",
  },
  {
    name: "Название клиники",
    address: "Адрес клиники",
  },
  {
    name: "Название клиники",
    address: "Адрес клиники",
  },
].map((item, index) => ({ ...item, id: index + 1 }));

export const clinicList = createSlice({
  name: "ClinicList",
  initialState,
  reducers: {
    addClinic: (state, action: { payload: Clinic }) => {
      state.push(action.payload);
    },
  },
});

export const { addClinic } = clinicList.actions;
export default clinicList;
