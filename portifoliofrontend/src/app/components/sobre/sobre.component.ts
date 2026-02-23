import { Component, OnInit, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TimelineItem } from "../../models/timelineItem.model";
import { TimelineItemService } from '../../services/timelineItem.service';

@Component({
  selector: "app-sobre",
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./sobre.component.html",
})
export class SobreComponent implements OnInit {
  @Input() projects: any[] = [];
  timelineItems: TimelineItem[] = [];

  constructor(private timelineService: TimelineItemService) {}

  ngOnInit(): void {
    this.timelineItems = this.timelineService.getTimelineItems();
  }

  getCardClasses(color: string) {
    const map: Record<string, string> = {
      purple: 'from-purple-600/20 to-purple-800/20 border-purple-500/30',
      blue: 'from-blue-600/20 to-blue-800/20 border-blue-500/30',
      indigo: 'from-indigo-600/20 to-indigo-800/20 border-indigo-500/30',
      violet: 'from-violet-600/20 to-violet-800/20 border-violet-500/30',
      pink: 'from-pink-500/20 to-pink-700/20 border-pink-500/30'
    };
    return map[color] ?? 'from-gray-700/20 to-gray-900/20 border-gray-500/30';
  }

  getBadgeClasses(color: string) {
    const map: Record<string, string> = {
      purple: 'bg-purple-600',
      blue: 'bg-blue-600',
      indigo: 'bg-indigo-600',
      violet: 'bg-violet-600',
      pink: 'bg-pink-600'
    };
    return map[color] ?? 'bg-gray-600';
  }

  getAvatarClasses(color: string) {
    const map: Record<string, string> = {
      purple: 'bg-purple-600',
      blue: 'bg-blue-600',
      indigo: 'bg-indigo-600',
      violet: 'bg-violet-600',
      pink: 'bg-pink-600'
    };
    return map[color] ?? 'bg-gray-600';
  }

  getProgressClasses(color: string) {
    const map: Record<string, string> = {
      purple: 'progress-primary',
      blue: 'progress-info',
      indigo: 'progress-accent',
      violet: 'progress-secondary',
      pink: 'progress-error'
    };
    return map[color] ?? 'progress-neutral';
  }

  getAnimatedBg(color: string) {
    const map: Record<string, string> = {
      purple: 'bg-gradient-to-br from-purple-600/30 via-purple-500/20 to-purple-800/30',
      blue: 'bg-gradient-to-br from-blue-600/30 via-blue-500/20 to-blue-800/30',
      indigo: 'bg-gradient-to-br from-indigo-600/30 via-indigo-500/20 to-indigo-800/30',
      violet: 'bg-gradient-to-br from-violet-600/30 via-violet-500/20 to-violet-800/30',
      pink: 'bg-gradient-to-br from-pink-600/30 via-pink-500/20 to-pink-800/30'
    };
    return map[color] ?? 'bg-gradient-to-br from-gray-600/30 via-gray-500/20 to-gray-800/30';
  }

  getNeonClasses(color: string) {
    const map: Record<string, string> = {
      purple: 'bg-purple-500 shadow-purple-500/50 border-purple-400',
      blue: 'bg-blue-500 shadow-blue-500/50 border-blue-400',
      indigo: 'bg-indigo-500 shadow-indigo-500/50 border-indigo-400',
      violet: 'bg-violet-500 shadow-violet-500/50 border-violet-400',
      pink: 'bg-pink-500 shadow-pink-500/50 border-pink-400'
    };
    return map[color] ?? 'bg-gray-500 shadow-gray-500/50 border-gray-400';
  }

  getTextGradient(color: string) {
    const map: Record<string, string> = {
      purple: 'group-hover:from-purple-400 group-hover:to-purple-600',
      blue: 'group-hover:from-blue-400 group-hover:to-blue-600',
      indigo: 'group-hover:from-indigo-400 group-hover:to-indigo-600',
      violet: 'group-hover:from-violet-400 group-hover:to-violet-600',
      pink: 'group-hover:from-pink-400 group-hover:to-pink-600'
    };
    return map[color] ?? 'group-hover:from-gray-400 group-hover:to-gray-600';
  }

  getProgressGlow(color: string) {
    const map: Record<string, string> = {
      purple: 'progress-primary shadow-lg shadow-purple-500/30',
      blue: 'progress-info shadow-lg shadow-blue-500/30',
      indigo: 'progress-accent shadow-lg shadow-indigo-500/30',
      violet: 'progress-secondary shadow-lg shadow-violet-500/30',
      pink: 'progress-error shadow-lg shadow-pink-500/30'
    };
    return map[color] ?? 'progress-neutral shadow-lg shadow-gray-500/30';
  }
}