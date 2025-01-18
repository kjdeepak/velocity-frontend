import { Component } from '@angular/core';
import { CoreModule, LicenseManager } from 'dynamsoft-barcode-reader-bundle';
import { SharedService } from '../shared.service';
import { CommonModule } from '@angular/common';
import { products } from '../products';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.scss'
})
export class ProductListComponent {
  products = products;
  inputText: string = '';
  processedText: string = '';
  placeholderText: string = 'LICENSE-KEY';
   
  constructor(private sharedService: SharedService) { }
   
  async activate(): Promise<void> {
    this.processedText = this.inputText.toUpperCase();
    // Configure the paths where the .wasm files and other necessary resources for modules are located.
    CoreModule.engineResourcePaths = {
      std: 'assets/dynamsoft-capture-vision-std/',
      dip: 'assets/dynamsoft-image-processing/',
      core: 'assets/dynamsoft-core/',
      license: 'assets/dynamsoft-license/',
      cvr: 'assets/dynamsoft-capture-vision-router/',
      dbr: 'assets/dynamsoft-barcode-reader/',
      dce: 'assets/dynamsoft-camera-enhancer/',
    };
   
    try {
      // Visit https://www.dynamsoft.com/customer/license/trialLicense/?product=dcv&package=cross-platform
      let licenseKey: string = this.inputText === '' ? this.placeholderText : this.inputText;
      await LicenseManager.initLicense(licenseKey, true);
      CoreModule.loadWasm(['DBR']);
   
      this.toggleDivVisibility();
    } catch (error) {
      alert(error);
    }
   
  }
   
  toggleDivVisibility(): void {
    this.sharedService.toggleShowDiv();
  }
   
  get showDiv(): boolean {
    return this.sharedService.getShowDiv();
  }
}
