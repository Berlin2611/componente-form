import { Component, Prop, h, Element, Event, EventEmitter, State } from '@stencil/core';

@Component({
  tag: 'my-form',
  styleUrl: 'my-component.css',
  shadow: true
})
export class MyComponent {

  @Prop() items: any[] = [{id: 1, name: 'PYTHON'}, {id: 2, name: 'JAVASCRIPT'}, {id: 3, name: 'JAVA'}];

  @Prop({ attribute: 'title' }) title1 = 'personalizado';

  @Element() el: HTMLElement;

  @Event() valueChance: EventEmitter;

  @State() activeMenu: boolean = false;
  @State() value: any;

  render() {
    return <div>
        <h1>{this.title1}</h1>
        <form>
          <p>Nombre:</p>
          <input type="text" class="field"/> <br/>

          <p>Correo electrónico:</p>
          <input type="text" class="field"/> <br/>

          <p>Asunto:</p>
          <input type="text" class="field"/> <br/>

          <p>Mensaje:</p>
          <textarea class="field"></textarea> <br/>

          <p class="center-content">
            <input type="submit" class="btn btn-green" value="Enviar Datos"/>
          </p>
        </form>
      </div>;
  }

}
