import { Component, OnInit } from '@angular/core';
import { IonInfiniteScroll } from '@ionic/angular';

@Component({
  selector: 'app-infinte-scroll',
  templateUrl: './infinte-scroll.page.html',
  styleUrls: ['./infinte-scroll.page.scss'],
})
export class InfinteScrollPage implements OnInit {
  // @ViewChild(IonInfiniteScroll) IonInfiniteScroll: IonInfiniteScroll;

  constructor() { }

  ngOnInit() {
  }
  loadData(event) {
    let data = 1000;
    setTimeout(() => {
      console.log('Done');
      // App logic to determine if all data is loaded
      // and disable the infinite scroll
      if (data == 1000) {
        console.log('disabled true');
        event.target.disabled = true;
      }else{ 
        console.log('complete');
        event.target.complete(); 
      }
    }, 500);
  }

  toggleInfiniteScroll() {
    // this.IonInfiniteScroll.disabled = !this.IonInfiniteScroll.disabled;
  }
}
