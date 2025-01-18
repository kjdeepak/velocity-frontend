import { Routes } from '@angular/router';
import { BarcodeReaderComponent } from './barcode-reader/barcode-reader.component';
import { BarcodeScannerComponent } from './barcode-scanner/barcode-scanner.component';
import { ProductListComponent } from './product-list/product-list.component';

export const routes: Routes = [
    { path: '', component: ProductListComponent },
  { path: 'barcode-reader', component: BarcodeReaderComponent },
  { path: 'barcode-scanner', component: BarcodeScannerComponent },
//   { path: 'file-detection', component: FileDetectionComponent },
//   { path: 'camera-detection', component: CameraDetectionComponent },
//   { path: 'mrz-reader', component: MrzReaderComponent },
//   { path: 'mrz-scanner', component: MrzScannerComponent },
//   { path: 'document-viewer', component: DocumentViewerComponent },
//   { path: 'acquire-image', component: AcquireImageComponent },
//   { path: 'image-editor', component: ImageEditorComponent },
];
