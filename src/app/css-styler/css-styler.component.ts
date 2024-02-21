import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output, computed, signal } from '@angular/core';
import { CssStyle, defaultStyle } from '../data';
import { computeMsgId, outputAst } from '@angular/compiler';

@Component({
  selector: 'app-css-styler',
  templateUrl: './css-styler.component.html',
  styleUrls: ['./css-styler.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CssStylerComponent {

  @Input({ required: true }) cssStyle!: CssStyle; //  = defaultStyle;
  
  @Output() cssStyleChange = new EventEmitter<CssStyle>();
 
  @Input() sigEtape !: boolean;

  

  get borderRadius(): number {
    return parseInt(this.cssStyle.borderRadius);
  }

  get borderUnit(): "%" | "px" {
    const L = /(px|%)$/.exec(this.cssStyle.borderRadius);
    if (L === null) {
      console.error("Invalid border radius unit !!!! Comment est ce possible ???");
      return "px";
    }
    return L[0] as "%" | "px";
  }

  public update(u : Partial<CssStyle>):void {
    this.cssStyleChange.emit({...this.cssStyle, ...u});
  }

  updateRadius(v: number, u: "%" | "px"): void {
    this.update({borderRadius: `${v}${u}`});
  }

  

 

  
}