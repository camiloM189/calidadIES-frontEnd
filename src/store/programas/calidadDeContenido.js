import { createSlice } from '@reduxjs/toolkit'


export const calidadDeContenido = createSlice({
    name:'calidadDeContenido',
    initialState:{
        Denominacion:0,
        AspectosCurriculares:0,
        JustificaciónDelPrograma:0,
        OrganizaciónDeLasActividadesAcadémicasYProcesoFormativo:0,
        Innovación:0,
        RelaciónConElSectorExterno:0,
        Profesores:0,
        MediosEducativos:0,
        InfraestructuraFísica:0,
        


    },
    reducers:{
        getDenominacion:(state,{payload}) => {
           state.Denominacion = payload;
        },
        getAspectosCurriculares:(state,{payload}) => {
            state.AspectosCurriculares = payload
        },
        getJustificaciónDelPrograma:(state,{payload}) => {
            state.JustificaciónDelPrograma = payload;
        },
        getOrganizaciónDeLasActividadesAcadémicasYProcesoFormativo:(state,{payload}) => {
            state.OrganizaciónDeLasActividadesAcadémicasYProcesoFormativo = payload
        },
        getInnovación:(state,{payload}) => {
            state.Innovación = payload
        },
        getRelaciónConElSectorExterno:(state,{payload}) => {
            state.RelaciónConElSectorExterno = payload;
        },
        getProfesores:(state,{payload}) => {
            state.Profesores = payload;
        },
        getMediosEducativos:(state,{payload}) => {
            state.MediosEducativos = payload;
        },
        getInfraestructuraFísica:(state,{payload}) => {
            state.InfraestructuraFísica = payload
        }


    }



})
export const {
    getDenominacion,getAspectosCurriculares,getJustificaciónDelPrograma,
    getOrganizaciónDeLasActividadesAcadémicasYProcesoFormativo,getInnovación,
    getRelaciónConElSectorExterno,getProfesores,getMediosEducativos,getInfraestructuraFísica
} = calidadDeContenido.actions;
