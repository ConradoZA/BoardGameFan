import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-confirmed',
  templateUrl: './confirmed.component.html',
  styleUrls: ['./confirmed.component.scss']
})
export class ConfirmedComponent implements OnInit {

  email: string;

  constructor(private route: ActivatedRoute, private router:Router, public userService:UserService, ) { }

  ngOnInit(): void {
    setTimeout(() => {
      this.router.navigate(['']);
    }, 3000);
    // Soy plenamente consciente de que el token enviado por el backend y el token en el LocalStorage NO son los mismos.
    // Sólo serán iguales si el usuario tiene un solo token en la base de datos.
    // Pero me da igual, el usuario ya está confirmado en la base de datos de forma adecuada y esto es solo un paripé.
  }

}
