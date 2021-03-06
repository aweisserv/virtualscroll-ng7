import { CdkVirtualScrollViewport } from '@angular/cdk/scrolling';
import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-virtual',
  templateUrl: './virtual.component.html',
  styleUrls: ['./virtual.component.css']
})
export class VirtualComponent implements OnInit {

  @ViewChild( CdkVirtualScrollViewport, {static:false} ) viewport: CdkVirtualScrollViewport;
  personas = Array(500).fill(0);
  
  constructor() { }

  ngOnInit(): void {
    console.log(this.personas);
  }

  ultima(): void {
    this.viewport.scrollToIndex( this.personas.length );
  }

  primera(): void {
    this.viewport.scrollToIndex( this.personas.length[0] );
  }

  centro(): void {
    this.viewport.scrollToIndex( this.personas.length/2 );
  }

}
