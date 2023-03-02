

document.addEventListener('DOMContentLoaded',()=>{

    let click1 = document.querySelector('.click1');

        click1.addEventListener('click', ev=>{
            console.log('entro');

            let mostrarh1 = document.querySelector('.mostrarh1');
            mostrarh1.innerHTML ='';

            let h1= document.createElement('h1');
            h1.textContent='Edgardo Lopez';
            h1.classList.add('nombre');
            console.log(ev.target);

            if (!ev.target.classList.contains('active'))mostrarh1.appendChild(h1);
            else mostrarh1.innerHTML='';
            ev.target.classList.toggle('active');
            // mostrarh1.appendChild(h1);

        });

        let click2 = document.querySelector('.click2');

        click2.addEventListener('click', ev=>{
            console.log('entro');

            let mostrarh1 = document.querySelector('.mostrarh1');
            mostrarh1.innerHTML ='';

            let h1= document.createElement('h1');
            h1.textContent='Edgardo@gmail.com';
            h1.classList.add('nombre');
            console.log(ev.target);

            if (!ev.target.classList.contains('active'))mostrarh1.appendChild(h1);
            else mostrarh1.innerHTML='';
            ev.target.classList.toggle('active');
            // mostrarh1.appendChild(h1);
        });

        let click3 = document.querySelector('.click3');

        click3.addEventListener('click', ev=>{
            console.log('entro');

            let mostrarh1 = document.querySelector('.mostrarh1');
            mostrarh1.innerHTML ='';

            let h1= document.createElement('h1');
            h1.textContent='Fecha de nacimiento  21/09/1995';
            h1.classList.add('nombre');
            console.log(ev.target);

            if (!ev.target.classList.contains('active'))mostrarh1.appendChild(h1);
            else mostrarh1.innerHTML='';
            ev.target.classList.toggle('active');
            // mostrarh1.appendChild(h1);
        });

        let click4 = document.querySelector('.click4');

        click4.addEventListener('click', ev=>{
            console.log('entro');

            let mostrarh1 = document.querySelector('.mostrarh1');
            mostrarh1.innerHTML ='';

            let h1= document.createElement('h1');
            h1.textContent='Buenos Aires/Capital';
            h1.classList.add('nombre');
            console.log(ev.target);

            if (!ev.target.classList.contains('active'))mostrarh1.appendChild(h1);
            else mostrarh1.innerHTML='';
            ev.target.classList.toggle('active');

            // mostrarh1.appendChild(h1);
        });

        let click5 = document.querySelector('.click5');

        click5.addEventListener('click', ev=>{
            console.log('entro');

            let mostrarh1 = document.querySelector('.mostrarh1');
            mostrarh1.innerHTML ='';

            let h1= document.createElement('h1');
            h1.textContent='Mi celular es 113244509';
            h1.classList.add('nombre');
            console.log(ev.target);

            if (!ev.target.classList.contains('active'))mostrarh1.appendChild(h1);
            else mostrarh1.innerHTML='';
            ev.target.classList.toggle('active');
            // mostrarh1.appendChild(h1);
        });
    });
