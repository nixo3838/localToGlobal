import { Injectable, Inject } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { DOCUMENT } from '@angular/common';
import { Renderer2, RendererFactory2 } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class ThemeService {
  private darkMode = new BehaviorSubject<boolean>(false);
  isDarkMode$ = this.darkMode.asObservable();
  private renderer: Renderer2;

  constructor(
    @Inject(DOCUMENT) private document: Document,
    rendererFactory: RendererFactory2
  ) {
    this.renderer = rendererFactory.createRenderer(null, null);
    const storedTheme = localStorage.getItem('isDarkTheme') === 'true';
    this.setDarkMode(storedTheme);
  }

  setDarkMode(isDark: boolean) {
    const htmlElement = this.document.documentElement;
    this.darkMode.next(isDark);
    localStorage.setItem('isDarkTheme', JSON.stringify(isDark));
    this.renderer.setAttribute(htmlElement, 'data-bs-theme', isDark ? 'dark' : 'light');
  }

  get currentValue() {
    return this.darkMode.value;
  }

}