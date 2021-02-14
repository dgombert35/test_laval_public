import { Injectable } from '@angular/core';
import { MatIconRegistry } from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';

@Injectable({
    providedIn: 'root'
})
export class Shared {


    constructor(private readonly matIconRegistry: MatIconRegistry,
        private readonly domSanitizer: DomSanitizer) { }

/*     getSvgIcon(nameSvg: string, keyIcon: string) {
        this.matIconRegistry.addSvgIcon(
            nameSvg,
            this.domSanitizer.bypassSecurityTrustResourceUrl(this.libellePipe.transform(keyIcon))
        );
    } */

    getNumberRegex(): string {
        let numberRegex = '^-?[0-9]\\d*(\\.\\d{1,2})?$';
        return numberRegex;
    }

}