import { Component, inject } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { MatIconModule, MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, MatIconModule, RouterLinkActive],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  matIconRegistry = inject(MatIconRegistry);
  domSanitizer = inject(DomSanitizer);

  constructor() {
    this.addIconRegistry('github', '/assets/github-logo.svg');
    this.addIconRegistry('linkedin', '/assets/linkedin-logo.svg');
  }

  addIconRegistry(icon: string, pathToSvgIcon: string) {
    this.matIconRegistry.addSvgIcon(
      icon,
      this.domSanitizer.bypassSecurityTrustResourceUrl(pathToSvgIcon)
    );
  }
}
