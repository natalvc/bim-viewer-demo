import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import '@awv/awv-bimviewer';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'awv-bimviewer-demo';
  toon2d = true;

   @ViewChild('bimViewer2d') set content(content: ElementRef) {
    if (content) {
      this.bimViewer2d = content;
      this.bimViewer2d.nativeElement.addEventListener('viewerInitialised', () => {
      this.bimViewer2d.nativeElement.loadModelByViewRole(
        '201-in.c3dv.dwg',
        'urn:dXJuOmFkc2sub2JqZWN0czpvcy5vYmplY3Q6YmltLXZpZXdlci9LWl9DM0RfY2tpdF8wLjIuMV92b29yYmVlbGRfaWRfZW5fZ2VvLmR3Zw',
        '2d');
      });
    }
  }

  @ViewChild('bimViewer3d') set content2(content: ElementRef) {
    if (content) {
      this.bimViewer3d = content;
      this.bimViewer3d.nativeElement.addEventListener('viewerInitialised', () => {
        this.bimViewer3d.nativeElement.loadModelByViewRole(
          '201-in.c3dv.dwg',
          'urn:dXJuOmFkc2sub2JqZWN0czpvcy5vYmplY3Q6YmltLXZpZXdlci9LWl9DM0RfY2tpdF8wLjIuMV92b29yYmVlbGRfaWRfZW5fZ2VvLmR3Zw',
          '3d');
      });
    }
  }

  bimViewer3d: ElementRef;

  bimViewer2d: ElementRef;

  switchViewer(): void {
    this.toon2d = !this.toon2d;
  }


}


