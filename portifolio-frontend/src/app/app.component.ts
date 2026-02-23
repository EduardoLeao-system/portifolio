import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { CardsProjetosComponent } from './components/cards-projetos/cards-projetos.component';
import { SobreComponent } from './components/sobre/sobre.component';
import { HabilidadesComponent } from './components/habilidades/habilidades.component';
import { ContatosComponent } from './components/contatos/contatos.component';
import { LucideAngularModule, Linkedin, Github, CheckCircle, Mail, Phone, Download } from 'lucide-angular';
import { Project } from './models/project.model';
import { ProjectService } from './services/project.service';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, HeaderComponent, CardsProjetosComponent, SobreComponent, HabilidadesComponent, ContatosComponent, LucideAngularModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

downloadCV(): void {
  window.open('/curriculo-carlos-eduardo.pdf', '_blank');
}


  readonly LinkedinIcon = Linkedin;
  readonly GithubIcon = Github;
  readonly CheckCircleIcon = CheckCircle;
  readonly MailIcon = Mail;
  readonly PhoneIcon = Phone;
  readonly DownloadIcon = Download;

  projects: Project[] = [];

  constructor(private projectService: ProjectService) {}

  ngOnInit(): void {
    this.projectService.getProjects().subscribe(data => {
      this.projects = data;
    });
  }
}
