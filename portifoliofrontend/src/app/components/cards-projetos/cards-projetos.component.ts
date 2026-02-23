import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Project } from '../../models/project.model';
import { LucideAngularModule, Code, Github, ExternalLink } from 'lucide-angular';

@Component({
  selector: 'app-cards-projetos',
  standalone: true,
  imports: [CommonModule, LucideAngularModule],
  templateUrl: './cards-projetos.component.html',
  styleUrls: ['./cards-projetos.component.css']
})
export class CardsProjetosComponent {
  @Input() project!: Project;

  readonly CodeIcon = Code;
  readonly GithubIcon = Github;
  readonly ExternalLinkIcon = ExternalLink;
}
