import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  app = "Xây dựng chương trình tính tổng hai số"
  a:any;
  b:any;
  t:any;
  ngOnInit() {
    // this.a = 0;
    // this.b = 0;
  }
  Tinh(){
    this.t  =  Number.parseInt(this.a) +  Number.parseInt(this.b);
  }
}
