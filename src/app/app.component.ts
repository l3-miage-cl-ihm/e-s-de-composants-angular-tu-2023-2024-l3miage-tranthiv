import { ChangeDetectionStrategy, Component, Input, Output, computed, signal,EventEmitter, WritableSignal, Signal } from '@angular/core';
import { CssStyle, defaultStyle } from './data';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  private readonly _style: WritableSignal<CssStyle> = signal<CssStyle>(defaultStyle);
  
  
  readonly style:Signal<CssStyle> = computed<CssStyle>(() => this._style());

}




