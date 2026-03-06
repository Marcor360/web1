import Headers from "../../components/header.tsx";
import Footer from "../../components/footer.tsx";
import Seo from "../../components/Seo";
import { SEO } from "../../seo";

export default function Politicas() {
    return (
        <div className="min-h-screen bg-white text-noche">
            <Seo {...SEO.politicas} />
            <Headers variant="dark" />

            <main className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-16 space-y-10">
                <div className="text-center space-y-4">
                    <p className="text-sm font-semibold uppercase tracking-[0.18em] text-cardeno">
                        Aviso de privacidad
                    </p>
                    <h1 className="text-3xl sm:text-4xl font-black tracking-tight text-noche">
                        Aviso de Privacidad
                    </h1>
                    <p className="text-base sm:text-lg text-noche/80 leading-relaxed">
                        En cumplimiento con la Ley Federal de Protección de Datos Personales en Posesión de los Particulares,
                        Payrolling-Tech pone a disposición el presente Aviso de Privacidad para informar a los usuarios sobre
                        el tratamiento de sus datos personales y garantizar su protección.
                    </p>
                </div>

                <ol className="space-y-6">
                    <li className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                        <div className="flex items-start gap-4">
                            <span className="text-cardeno text-xl font-extrabold">1.</span>
                            <div className="space-y-3">
                                <h2 className="text-xl font-bold text-noche">
                                    Responsable del tratamiento de los datos
                                </h2>
                                <p className="text-base leading-relaxed text-noche/80">
                                    Payrolling-Tech es responsable del uso y protección de los datos personales que se recaban
                                    a través de su sitio web, incluyendo formularios de contacto, reclutamiento y otros medios
                                    digitales.
                                </p>
                            </div>
                        </div>
                    </li>

                    <li className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                        <div className="flex items-start gap-4">
                            <span className="text-cardeno text-xl font-extrabold">2.</span>
                            <div className="space-y-3">
                                <h2 className="text-xl font-bold text-noche">Datos personales que se recaban</h2>
                                <p className="text-base leading-relaxed text-noche/80">
                                    Los datos personales que Payrolling-Tech puede recabar incluyen, de manera enunciativa mas no
                                    limitativa:
                                </p>
                                <ul className="list-disc space-y-2 pl-5 text-base leading-relaxed text-noche/80">
                                    <li>Nombre</li>
                                    <li>Teléfono</li>
                                    <li>Correo electrónico</li>
                                    <li>Información laboral y profesional</li>
                                    <li>Datos proporcionados en currículums o formularios de contacto</li>
                                </ul>
                            </div>
                        </div>
                    </li>

                    <li className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                        <div className="flex items-start gap-4">
                            <span className="text-cardeno text-xl font-extrabold">3.</span>
                            <div className="space-y-3">
                                <h2 className="text-xl font-bold text-noche">Finalidad del uso de los datos</h2>
                                <p className="text-base leading-relaxed text-noche/80">
                                    Los datos personales recabados serán utilizados exclusivamente para las siguientes finalidades:
                                </p>
                                <ul className="list-disc space-y-2 pl-5 text-base leading-relaxed text-noche/80">
                                    <li>Contacto con clientes, prospectos y candidatos</li>
                                    <li>Procesos de reclutamiento y selección</li>
                                    <li>Administración de servicios de nómina y recursos humanos</li>
                                    <li>Cumplimiento de obligaciones legales y administrativas</li>
                                    <li>Atención a solicitudes de información sobre los servicios ofrecidos</li>
                                </ul>
                                <p className="text-base leading-relaxed text-noche/80">
                                    En ningún caso los datos personales serán utilizados para fines distintos a los aquí descritos.
                                </p>
                            </div>
                        </div>
                    </li>

                    <li className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                        <div className="flex items-start gap-4">
                            <span className="text-cardeno text-xl font-extrabold">4.</span>
                            <div className="space-y-3">
                                <h2 className="text-xl font-bold text-noche">Protección y uso responsable de la información</h2>
                                <p className="text-base leading-relaxed text-noche/80">Payrolling-Tech se compromete a:</p>
                                <ul className="list-disc space-y-2 pl-5 text-base leading-relaxed text-noche/80">
                                    <li>No vender, rentar, ceder ni transferir datos personales a terceros para fines comerciales.</li>
                                    <li>No hacer uso indebido de la información personal proporcionada.</li>
                                    <li>
                                        Implementar medidas de seguridad administrativas, técnicas y físicas para proteger los datos
                                        contra daño, pérdida, alteración, destrucción o acceso no autorizado.
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </li>

                    <li className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                        <div className="flex items-start gap-4">
                            <span className="text-cardeno text-xl font-extrabold">5.</span>
                            <div className="space-y-3">
                                <h2 className="text-xl font-bold text-noche">Derechos ARCO</h2>
                                <p className="text-base leading-relaxed text-noche/80">
                                    Los titulares de los datos personales tienen derecho a Acceder, Rectificar, Cancelar u Oponerse
                                    (Derechos ARCO) al tratamiento de sus datos.
                                </p>
                                <p className="text-base leading-relaxed text-noche/80">
                                    El ejercicio de estos derechos podrá realizarse mediante los medios de contacto disponibles en el
                                    sitio web de Payrolling-Tech.
                                </p>
                            </div>
                        </div>
                    </li>

                    <li className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                        <div className="flex items-start gap-4">
                            <span className="text-cardeno text-xl font-extrabold">6.</span>
                            <div className="space-y-3">
                                <h2 className="text-xl font-bold text-noche">Cambios al aviso de privacidad</h2>
                                <p className="text-base leading-relaxed text-noche/80">
                                    Payrolling-Tech se reserva el derecho de realizar modificaciones o actualizaciones al presente
                                    Aviso de Privacidad en cualquier momento. Cualquier cambio será publicado en este mismo apartado
                                    del sitio web.
                                </p>
                            </div>
                        </div>
                    </li>
                </ol>
            </main>

            <Footer />
        </div>
    );
}
