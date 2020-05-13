import { Component, Prop, h, Element, Event, EventEmitter, State } from '@stencil/core';
import Swal from 'sweetalert2';
@Component({
  tag: 'my-form',
  styleUrl: 'my-component.css',
  shadow: true
})
export class MyComponent {

  @Prop() items: any[] = [{id: 1, name: 'PYTHON'}, {id: 2, name: 'JAVASCRIPT'}, {id: 3, name: 'JAVA'}];

  @Prop({ attribute: 'title' }) title1 = 'Titulo desde Stenciljs';

  @Element() el: HTMLElement;

  @Event() valueChance: EventEmitter;

  @State() activeMenu: boolean = false;
  @State() value: any;



  handleChange(event) {
    this.value = event.target.value;
  }
  handleSubmit(e) {
    e.preventDefault()
    console.log(this.value);
    // send data to our backend
    const formData = new FormData(e.target);

    fetch('https://httpbin.org/post', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: formData
    })
    .then(function(response) {
        console.log('response =', response);
        return response.json();
    })
    .then(function(data) {
        console.log('data = ', data);  
          Swal.fire({
            title: '¡Excelente!',
            text: 'El formulario se ha enviado',
            icon: 'success',
            confirmButtonText: 'Volver'
          })
    })
    .catch(function(err) {
        console.error(err);
        Swal.fire({
          title: '¡Error!',
          text: 'El formulario no se ha enviado',
          icon: 'error',
          confirmButtonText: 'Volver'
        })
    });
  }

  render() {
    return <div>
        <h1>{this.title1}</h1>
        <div><slot /></div>
        <form onSubmit={(e) => this.handleSubmit(e)}>
          <p>Nombres:</p>
          <input name="nombress" type="text" class="field"/> <br/>

          <p>Edad:</p>
          <input name="edad" type="text" class="field"/> <br/>
         
          <p>Correo electrónico:</p>
          <input name="correo" type="text" class="field"/> <br/>

          <p class="center-content">
            <input type="submit" class="btn btn-green" value="Enviar Datos"/>
          </p>
        </form>
      </div>;
  }

}
