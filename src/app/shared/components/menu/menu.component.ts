import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'shared-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {
      public items: MenuItem[]=[];
  
      ngOnInit() {
          this.items = [
                {
                    label: "Pipes de Angular",
                    icon: "pi pi-desktop",
                    items:[
                        {
                            label: "Textos y Fechas",
                            icon: "pi pi-align-left",
                            routerLink: "basics"
                        },
                        {
                            label: "Números",
                            icon: "pi pi-dollar",
                            routerLink: "numbers"
                        },
                        {
                            label: "No Comunes",
                            icon: "pi pi-globe",
                            routerLink: "uncommon"
                        }
                    ]
                },
                {
                    label: "Pipes Personalizados",
                    icon: "pi pi-cog",
                    items:[
                        {
                            label: "Custom Pipe",
                            icon: "pi pi-cog",
                            routerLink: "custom"
                        },
                    ]
                }

          ];
      }
  
}
