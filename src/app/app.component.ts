import { ChangeDetectionStrategy, Component, Input, computed, signal } from '@angular/core';
import { CssStyle, defaultStyle } from './data';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {

  private readonly _sigRacine = signal<CssStyle>(defaultStyle);
  public readonly sigRacine = computed<CssStyle>(() => this._sigRacine());

  public readonly sigEtape = signal<boolean>(false);
  public readonly etape = computed<boolean>(() => this.sigEtape());



  public readonly sigColor = computed<string>(() => this._sigRacine().backgroundColor);
  public readonly sigColorBorder = computed<string>(() => this._sigRacine().borderColor);
 
  // there are 3 signals for button mode
  etaps = "";

  upDateButtonMode1() {
    this.etaps = "1";
  }
  upDateButtonMode2() {
    this.etaps = "2";
  }
  upDateButtonMode3() {
    this.etaps = "3";
  }

  
  public readonly style = computed<CssStyle>(() => this.sigRacine());
  public readonly sigStyle = signal<CssStyle>(defaultStyle);

 
  updateCssStyle(css: CssStyle): void {
    this._sigRacine.set(css);
  }

  updateEtape(etape: boolean): void {
    this.sigEtape.set(etape);
  }

  updateColor(color: string): void {
    this._sigRacine.set({...this._sigRacine(), backgroundColor: color});
  }

  updateBorderColor(color: string): void {
    this._sigRacine.set({...this._sigRacine(), borderColor: color});
  }
  
  essaiChange() {
    this._sigRacine.set({
      backgroundColor: "#ff0000",
      borderColor: "#aaaaaa",
      borderRadius: "50%"
    })
  }
}