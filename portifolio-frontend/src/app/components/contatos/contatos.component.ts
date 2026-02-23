import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LucideAngularModule, Linkedin, Github, Mail, Phone } from 'lucide-angular';
import { Project } from '../../models/project.model';

@Component({
  selector: 'app-contatos',
  standalone: true,
  imports: [CommonModule, LucideAngularModule],
  templateUrl: './contatos.component.html',
  styleUrls: ['./contatos.component.css']
})

export class ContatosComponent{


  readonly LinkedinIcon = Linkedin;
  readonly GithubIcon = Github;
  readonly MailIcon = Mail;
  readonly PhoneIcon = Phone;


}
