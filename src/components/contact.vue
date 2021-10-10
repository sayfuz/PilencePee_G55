<template>
    <div class="text-center row align-items-center justify-content-center mt-5 no-row">
        <div class="container">
            <div class="row mt-5">
                <div class="col">
                    <h1 class="display-6 fw-bold text-primary">Contacto</h1>
                </div>
            </div>
        </div>
        <div class="container w-75 w-xs-100 bg-white rounded shadow p-5 mt-5 rounded">
            <div class="row">
                <div class="col-12 col-md-6">
                    <h2 class="fw-bold mb-3">FAQ</h2>
                    <div class="accordion" id="accordion-contact">
                        <div class="accordion-item">
                            <h2 class="accordion-header" id="headingOne">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                    data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                    ¿Cómo publico un servicio que ofrezco?
                                </button>
                            </h2>
                            <div id="collapseOne" class="accordion-collapse collapse" aria-labelledby="headingOne"
                                data-bs-parent="#accordion-contact">
                                <div class="accordion-body">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente deleniti quo laudantium eos velit! Voluptates molestias, temporibus commodi nisi sunt voluptatum! Maxime quos impedit sed suscipit temporibus. Minus, laboriosam fuga?
                                </div>
                            </div>
                        </div>
                        <div class="accordion-item">
                            <h2 class="accordion-header" id="headingTwo">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                    data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                    ¿Qué hacer si me han estafado?
                                </button>
                            </h2>
                            <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo"
                                data-bs-parent="#accordion-contact">
                                <div class="accordion-body">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Id laudantium est veritatis vel perferendis eveniet hic nesciunt expedita maiores ipsum! Enim suscipit deserunt porro maxime rerum? Numquam ut totam rem.
                                </div>
                            </div>
                        </div>
                        <div class="accordion-item">
                            <h2 class="accordion-header" id="headingThree">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                    data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                    ¿Qué tipo de servicios puedo ofrecer?
                                </button>
                            </h2>
                            <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree"
                                data-bs-parent="#accordion-contact">
                                <div class="accordion-body">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque quas praesentium, in harum excepturi unde dicta molestias nostrum esse inventore deleniti voluptatibus delectus reprehenderit numquam laudantium atque ipsam vitae consequuntur?
                                </div>
                            </div>
                        </div>
                        <div class="accordion-item">
                            <h2 class="accordion-header" id="headingFour">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                    data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                                    ¿Cómo invierto en PilencePee?
                                </button>
                            </h2>
                            <div id="collapseFour" class="accordion-collapse collapse" aria-labelledby="headingFour"
                                data-bs-parent="#accordion-contact">
                                <div class="accordion-body">
                                     Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, illum nobis esse doloribus, at maiores ad assumenda distinctio enim tempore ut vero magni. Magnam perferendis veritatis pariatur officia eum vero.
                                </div>
                            </div>
                        </div>
                        <div class="accordion-item">
                            <h2 class="accordion-header" id="headingFive">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                    data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                                    ¿Cómo aumentar la visibilidad de mi servicio?
                                </button>
                            </h2>
                            <div id="collapseFive" class="accordion-collapse collapse" aria-labelledby="headingFive"
                                data-bs-parent="#accordion-contact">
                                <div class="accordion-body">
                                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facilis recusandae dolores suscipit debitis, soluta nemo molestias doloremque enim nesciunt. Doloribus dignissimos natus rem vel id nihil aspernatur non in similique.
                                </div>
                            </div>
                        </div>
                        <div class="accordion-item">
                            <h2 class="accordion-header" id="headingSix">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                    data-bs-target="#collapseSix" aria-expanded="false" aria-controls="collapseSix">
                                    ¿Qué hacer si se presenta un fallo?
                                </button>
                            </h2>
                            <div id="collapseSix" class="accordion-collapse collapse" aria-labelledby="headingSix"
                                data-bs-parent="#accordion-contact">
                                <div class="accordion-body">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, alias maiores at necessitatibus culpa et ex laborum, eum odio aut nesciunt iure voluptatibus accusamus veritatis sint perferendis fugit aspernatur iusto.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-12 col-md-6">
                    <form>
                        <div class="mb-3 mt-3">
                            <label for="name" class="form-label">Nombre</label>
                            <input type="text" class="form-control" id="name" aria-describedby="emailHelp" required>
                        </div>
                        <div class="mb-3">
                            <label for="email" class="form-label">Email</label>
                            <input type="email" class="form-control" id="email" required>
                        </div>
                        <div class="mb-3">
                            <label for="phone" class="form-label">Teléfono</label>
                            <input type="number" class="form-control" id="phone">
                        </div>
                        <div class="form mb-3">
                            <label for="message">Mensaje</label>
                            <textarea class="form-control" id="message" style="height: 100px" required></textarea>
                        </div>
                        <div class="mb-3 form-check">
                            <input type="checkbox" class="" id="policies" required>
                            <label class="form-check-label ms-1" for="policies">Acepto la politicas de provacidad y el aviso legal</label>
                        </div>
                        <button type="submit" class="btn btn-primary">Enviar</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {

    }
</script>

<style>
@media(max-width:1000px){
.w-xs-100{
    width: 100% !important;
}
}
</style>