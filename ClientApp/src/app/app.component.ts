import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
declare const WebRtcStreamer: any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit, OnChanges {
  title = 'app';
  rtsp_url: string;
  videos = Array(20);

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.rtsp_url) {
      this.reload();
    }
  }

  ngOnInit(): void {
    this.reload();
  }

  private reload() {
    const rtsp_url = this.rtsp_url;
    const id = 'video';
    this.connect(id, rtsp_url);
  }


  private connect(id, rtsp_url: string) {
    const url = location.protocol + '//' + window.location.hostname + ':8000';

    const webRtcServer = new WebRtcStreamer(id, url);
    webRtcServer.connect(rtsp_url);
  }

}
