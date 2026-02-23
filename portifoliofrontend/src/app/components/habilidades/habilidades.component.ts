import { Component, AfterViewInit, ViewChildren, ElementRef, QueryList } from '@angular/core';
import { CommonModule } from '@angular/common';

declare var lucide: any;

interface Skill {
  name: string;
  icon: string;
  level: number;
  color: string;
}

@Component({
  selector: 'app-habilidades',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './habilidades.component.html',
  styleUrls: ['./habilidades.component.css']
})
export class HabilidadesComponent implements AfterViewInit {

  @ViewChildren('skillCard') skillCards!: QueryList<ElementRef>;

  skills: Skill[] = [
    { name: 'Angular', icon: 'triangle', level: 50, color: '#dd0031' },
    { name: 'TypeScript', icon: 'code', level: 80, color: '#3178c6' },
    { name: 'Java', icon: 'coffee', level: 90, color: '#f89820' },
    { name: 'Spring Boot', icon: 'leaf', level: 85, color: '#6db33f' },
    { name: 'HTML/CSS', icon: 'layout', level: 95, color: '#e34f26' },
    { name: 'JavaScript', icon: 'zap', level: 85, color: '#f7df1e' },
    { name: 'Git', icon: 'git-branch', level: 80, color: '#f05032' },
    { name: 'MySQL', icon: 'database', level: 75, color: '#4479a1' },
    { name: 'Docker', icon: 'box', level: 70, color: '#0db7ed' }
  ];

  ngAfterViewInit() {
    this.observeSkillCards();
    setTimeout(() => {
      if (typeof lucide !== 'undefined') {
        lucide.createIcons();
      }
    }, 100);
  }

  private observeSkillCards() {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, options);

    this.skillCards.forEach(card => {
      observer.observe(card.nativeElement);
    });
  }
}
