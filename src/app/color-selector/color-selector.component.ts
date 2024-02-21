import { CssSelector } from '@angular/compiler';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CssStyle } from '../data';
type gbd = 'r' | 'g' | 'b';

@Component({
  selector: 'app-color-selector',
  templateUrl: './color-selector.component.html',
  styleUrls: ['./color-selector.component.scss']
})
export class ColorSelectorComponent {
  @Input() color !: string;
  @Output() colorChange = new EventEmitter<string>();

  
  public get red(): number {
    return this.extractColor('r');
  }
  public get green(): number {
    return this.extractColor('g');
  }
  public get blue(): number {
    return this.extractColor('b');
  }

  extractColor(c: gbd): number {
    const color = this.color;
    const index = c === 'r' ? 1 : c === 'g' ? 3 : 5;
    return parseInt(color.slice(index, index + 2), 16);
  }

  public updateColor(c: gbd, value: number): void {
    const color = this.color;
    const index = c === 'r' ? 1 : c === 'g' ? 3 : 5; 
    const newColor = color.slice(0, index) + this.toHex(value) + color.slice(index + 2); 
    this.colorChange.emit(newColor);
  }

  private toHex(value: number): string {
    const hex = value.toString(16);
    return hex.length === 1 ? '0' + hex : hex;
  }

  

}
