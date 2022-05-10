function cargaPantalla() {

    return `<link rel="stylesheet" href="bootstrap/css/bootstrap.min.css">
            <style>
                a:link {text-decoration: none;}
                a:visited {text-decoration: none;}
                a:hover {color: red; text-decoration: none;}
                a:active {text-decoration: none;}
            </style>
            <nav class="navbar navbar-light flex-nowrap" style="background-color: #d11507;">
                <div class="container-fluid">
                    <div class="d-flex">
                        <div class="col-4"> 
                            <img src="img/logoweb.png" class="card-img border-0">                        
                        </div>
                    </div>
                    <div class="d-flex">                                                    
                        <a  href="#" id="botonNuevo" class="form-control form-control-lg me-2" 
                            role="button"
                            style="background-color: #00d8d0;
                                font-family: 'Lucida Console', Monaco, monospace;
                                font-weight: bold;"
                            >
                            Nuevo
                        </a>
                        <a  href="#" id="botonCerrar" class="form-control form-control-lg" 
                            role="button"
                            style="background-color: #00d8d0;
                                    font-family: 'Lucida Console', Monaco, monospace;
                                    font-weight: bold;"
                            >
                            Cerrar
                        </a>
                    </div>
                </div>
            </nav>`

}

customElements.define('nav-index', class extends HTMLElement {

    constructor() {   

        super();        

    }

    connectedCallback() {

        let tmpl = document.createElement('template');
        tmpl.innerHTML = cargaPantalla();

        let shadowRoot = this.attachShadow({mode: 'closed'});
        shadowRoot.appendChild(tmpl.content.cloneNode(true));
        
    }
        
});