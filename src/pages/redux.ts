import { createSlice } from '@reduxjs/toolkit'

type AuthState = {
    isError: boolean | null;
};

// Начальное состояние
const initialAuto: AuthState = {
    isError: false,
};


export const errorAuthorization = createSlice({
    name: 'errorAuthorization',
    initialState: initialAuto,
    reducers: {
        toggle: (state) => { state.isError = !state.isError}
    }
})

export const { toggle } = errorAuthorization.actions;

type Clinic = {
    id: string,
    name: string,
    address: string,
}

const initialClinic: Clinic[] = [
    {
        id: '1',
        name: 'Название клиники',
        address: 'Адрес клиники'
    },
];

export const clinicList = createSlice({
    name: 'ClinicList',
    initialState: initialClinic,
    reducers: {
        addClinic: (state, action: { payload: Clinic }) => {
            return [...state, action.payload];
        },
    }
})

export const { addClinic } = clinicList.actions;

type Pacient = {
    id: string,
    name: string,
    phone: string,
    doctor: string,
    doctor_pro: string,
    comm: string,
}

const initialPacient: Pacient[] = [
    {
        id: '1',
        name: 'Морару Валентин',
        phone: '+8(988)184-25-74',
        doctor:  'Романова Надежда Александровна',
        doctor_pro: 'Травматолог, врач ЛФК, ортопед',
        comm: 'С первых дней использования сервиса мы отметили его интуитивно понятный интерфейс и мощные возможности для анализа данных. Визуализация информации позволяет нам быстро выявлять ключевые тренды и закономерности, что значительно ускоряет процесс принятия решений. Особенно полезными оказались дашборды, которые предоставляют наглядное представление о состоянии различных бизнес-процессов.\n',
    },
];

export const pacientList = createSlice({
    name: 'PacientList',
    initialState: initialPacient,
    reducers: {
        addPacient: (state, action: { payload: Pacient }) => {
            return [...state, action.payload];
        },
    }
})

export const { addPacient } = pacientList.actions;
