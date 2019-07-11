let casado = document.getElementById('cs');
let soltero = document.getElementById('sl');
let genero = document.getElementById('gen');
let boton = document.getElementById('bt');
let tcasado = document.getElementById('cas');
let tabla = document.getElementById('tabla');

boton.addEventListener('click', function(){
    let nombreUsuario = document.getElementById('nombre').value;
    let apellido = document.getElementById('apellido').value;
        let tr=document.createElement('tr');
        let td1=document.createElement('td');
        let td2=document.createElement('td');
        let td3=document.createElement('td');
        let td4=document.createElement('td');
        td1.appendChild(document.createTextNode(nombreUsuario));
        td2.appendChild(document.createTextNode(apellido));
        td3.appendChild(document.createTextNode(genero.options[genero.selectedIndex].text));
        if(casado.checked==true){
            td4.appendChild(document.createTextNode('Casado'))
        }else{
            td4.appendChild(document.createTextNode('Soltero'));
        }
        tr.append(td1, td2, td3, td4);
        tabla.appendChild(tr);
        document.getElementById('nombre').value='';
        document.getElementById('apellido').value='';
        genero.selectedIndex=0;
       casado.checked=false;
        soltero.checked=false;
    }
)

casado.addEventListener('click', function(){
    casado.checked=true;
    soltero.checked=false;
}
)
soltero.addEventListener('click', function(){
    soltero.checked=true;
    casado.checked=false;
}
)