import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NaoEncontradoComponent } from "./nao-encontrado/nao-encontrado.component";
import { HomeComponent } from "./home/home.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NaoEncontradoComponent, HomeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'treino';
}
