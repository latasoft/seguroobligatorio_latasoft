"use client";
import React from 'react';
// import { useForm, ValidationError } from '@formspree/react';



export default function Segurosgenerales() {
    /*
    const [state, handleSubmit] = useForm("mldrnqzn");
    if (state.succeeded) {
        return (
            <main className=" bg-white">
                <section className="mt-16 sm:mt-16 md:mt-16 lg:mt-24 bg-cover bg-center " >
                    <div className=" w-full mx-auto pt-28 pb-20">
                        <h2 data-aos-once="true" data-aos="fade-down" className=" max-w-screen-lg mx-auto text-center text-black text-opacity-100 text-4xl sm:text-4xl md:text-5xl lg:text-6xl font-bold uppercase font-Poppins">Seguros Generales</h2>
                        <hr data-aos-once="true" data-aos="flip-left" className=" max-w-screen-lg block w-1/3 sm:w-1/3 md:w-1/4 lg:w-1/5 h-0.5 bg-[#E27905] mt-12 sm:mt-12 md:mt-14 lg:mt-16 mx-auto py-0 border-none " />
                    </div>
                </section>
                <section className=" pb-0 sm:pb-0 md:pb-28 lg:pb-32 w-full bg-white">
                    <p className={` text-center text-2xl font-bold py-8 mx-auto w-full max-w-3xl p-4  bg-slate-300 bg-opacity-70 md:rounded-xl md:shadow-lg md:shadow-gray-700 lg:rounded-xl lg:shadow-lg lg:shadow-gray-700 `}>
                        Gracias por su mensaje.
                    </p>
                </section>
            </main>
        );
    } */
    return (
        <main className=" bg-white">
            <section className="mt-16 sm:mt-16 md:mt-16 lg:mt-24 bg-cover bg-center " >
                <div className=" w-full mx-auto pt-28 pb-20">
                    <h2 data-aos-once="true" data-aos="fade-down" className=" max-w-screen-lg mx-auto text-center text-black text-opacity-100 text-4xl sm:text-4xl md:text-5xl lg:text-6xl font-bold uppercase font-Poppins">Seguros Generales</h2>
                    <hr data-aos-once="true" data-aos="flip-left" className=" max-w-screen-lg block w-1/3 sm:w-1/3 md:w-1/4 lg:w-1/5 h-0.5 bg-[#E27905] mt-12 sm:mt-12 md:mt-14 lg:mt-16 mx-auto py-0 border-none " />
                </div>
            </section>
            {/*
            <section className=" w-full my-0 sm:my-0 md:my-0 lg:my-28 ">
                <div className=" max-w-screen-lg w-full mx-auto aspect-w-16 aspect-h-9 ">
                    <iframe data-aos="fade-down" className="w-full h-full  " src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d6688.334300471738!2d-71.602486!3d-33.052066!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9689e0c2244c3e03%3A0x7e05ab00cee04df2!2sAv.%20Col%C3%B3n%203992%2C%20Valpara%C3%ADso!5e0!3m2!1ses-419!2scl!4v1721815658147!5m2!1ses-419!2scl"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
            </section>
            */}
            <section className=" pb-0 sm:pb-0 md:pb-28 lg:pb-32 w-full bg-white">
                <form data-aos="fade-up" data-aos-once="true" className={` py-8 mx-auto w-full max-w-3xl p-4 bg-slate-300 bg-opacity-70 md:rounded-xl md:shadow-lg md:shadow-gray-700 lg:rounded-xl lg:shadow-lg lg:shadow-gray-700 `}
                    acceptCharset="utf-8" action="https://formspree.io/f/mldrnqzn" method="post"
                    > {/* onSubmit={handleSubmit} */}
                    <p className="mt-8">
                        <label className=" block text-base font-bold" htmlFor="consultaTipo">Tipo de seguro:</label>
                        <select className=" block w-full border-2 border-solid border-gray-300 p-2 bg-white bg-opacity-70 appearance-none bg-[url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNSIgaGVpZ2h0PSIyNSIgZmlsbD0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2U9IiNiYmIiPjxwYXRoIGQ9Ik02IDlsNiA2IDYtNiIvPjwvc3ZnPg==)] bg-no-repeat bg-right " id="consultaTipo" name="consultaTipo" >
                            <option className="uppercase" value="Seleccione...">Seleccione...</option>
                            <option className="uppercase" value="Vehículos">Vehículos</option>
                            <option className="uppercase" value="Vida">Vida</option>
                            <option className="uppercase" value="Otros">Otros</option>
                        </select>
                    </p>
                    <h4 className="mt-16 bloc font-bold text-center">
                        <span className=" text-2xl font-bold ">Datos asegurado</span><br />
                        <span className=" text-lg font-normal ">(Debe corresponder al dueño del vehículo)</span></h4>
                    <p className="mt-8">
                        <label className=" block text-base font-bold" htmlFor="rut">RUT</label>
                        <input className=" block w-full border-2 border-solid border-gray-300 p-2 bg-white bg-opacity-70" type="text" id="rut" name="rut" />
                    </p>
                    <p className="mt-8">
                        <label className=" block text-base font-bold" htmlFor="nombre">Nombre</label>
                        <input className=" block w-full border-2 border-solid border-gray-300 p-2 bg-white bg-opacity-70" type="text" id="nombre" name="nombre" />
                    </p>
                    <p className="mt-8">
                        <label className=" block text-base font-bold" htmlFor="patapellido">Apellido patero</label>
                        <input className=" block w-full border-2 border-solid border-gray-300 p-2 bg-white bg-opacity-70" type="text" id="patapellido" name="patapellido" />
                    </p>
                    <p className="mt-8">
                        <label className=" block text-base font-bold" htmlFor="matapellido">Apellido materno</label>
                        <input className=" block w-full border-2 border-solid border-gray-300 p-2 bg-white bg-opacity-70" type="text" id="matapellido" name="matapellido" />
                    </p>
                    <p className="mt-8">
                        <label className=" block text-base font-bold" htmlFor="correo">Correo electrónico</label>
                        <input className=" block w-full border-2 border-solid border-gray-300 p-2 bg-white bg-opacity-70" type="email" id="correo" name="correo" />
                    </p>
                    <h4 className="mt-16 bloc font-bold text-center">
                        <span className=" text-2xl font-bold ">Datos del vehículo</span></h4>

                    <p className="mt-8">
                        <label className=" block text-base font-bold" htmlFor="vehiculotipo">Tipo de vehículo</label>
                        <input className=" block w-full border-2 border-solid border-gray-300 p-2 bg-white bg-opacity-70" type="text" id="vehiculotipo" name="vehiculotipo" />
                    </p>
                    <p className="mt-8">
                        <label className=" block text-base font-bold" htmlFor="vehiculopatente">Patente</label>
                        <input className=" block w-full border-2 border-solid border-gray-300 p-2 bg-white bg-opacity-70" type="text" id="vehiculopatente" name="vehiculopatente" />
                    </p>
                    <p className="mt-8">
                        <label className=" block text-base font-bold" htmlFor="vehiculomarca">Marca</label>
                        <input className=" block w-full border-2 border-solid border-gray-300 p-2 bg-white bg-opacity-70" type="text" id="vehiculomarca" name="vehiculomarca" />
                    </p>
                    <p className="mt-8">
                        <label className=" block text-base font-bold" htmlFor="vehiculomodelo">Modelo</label>
                        <input className=" block w-full border-2 border-solid border-gray-300 p-2 bg-white bg-opacity-70" type="text" id="vehiculomodelo" name="vehiculomodelo" />
                    </p>
                    <p className="mt-8">
                        <label className=" block text-base font-bold" htmlFor="vehiculoagno">Año</label>
                        <input className=" block w-full border-2 border-solid border-gray-300 p-2 bg-white bg-opacity-70" type="number" id="vehiculoagno" name="vehiculoagno" />
                    </p>
                    <p className="mt-8">
                        <input className=" cursor-pointer px-6 py-2 font-bold text-white text-opacity-40 hover:text-opacity-100 uppercase text-center inline-block bg-gray-500 hover:bg-gray-800 transition-all ease duration-300" type="submit" id="enviar" name="enviar" value="Enviar"
                        /> {/* disabled={state.submitting} */}
                    </p>
                </form>
            </section>

        </main>
    );
}


