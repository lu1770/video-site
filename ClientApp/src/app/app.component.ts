import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
declare const WebRtcStreamer: any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit, OnChanges {
  title = 'app';
  rtsp_url: string;

  constructor() {
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.rtsp_url) {
      this.reload();
    }
  }

  ngOnInit(): void {
    this.reload();
  }

  private reload() {
    const url = location.protocol + '//' + window.location.hostname + ':8000';
    const webRtcServer = new WebRtcStreamer('video', url);
    webRtcServer.connect(this.rtsp_url);
  }
}
