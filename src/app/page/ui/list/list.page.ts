import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-list',
    templateUrl: './list.page.html',
    styleUrls: ['./list.page.scss'],
})

export class ListPage implements OnInit {
    items: any[] = [];

    constructor() {
        let rotateImg = 0;
        let lorem = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, seddo eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';
        let images = [
            'bandit',
            'batmobile',
            'blues-brothers',
            'bueller',
            'delorean',
            'eleanor',
            'general-lee',
            'ghostbusters',
            'knight-rider',
            'mirth-mobile'
        ];
        
        let getImgSrc = () => {
            const src = 'https://dummyimage.com/600x400/${Math.round( Math.random() * 99999)}/fff.png';
            rotateImg++;
            if (rotateImg === images.length) {
                rotateImg = 0;
            }
            return src;
        }
        for (let i = 0; i < 5; i++) {
            this.items.push({
                name: i+1 + ' - ' + images[rotateImg],
                imgSrc: getImgSrc(),
                avatarSrc: getImgSrc(),
                imgHeight: Math.floor(Math.random() * 50 + 150),
                content: lorem.substring(0, Math.random() * (lorem.length - 100) + 100)
            }); 
            rotateImg++;
            if (rotateImg === images.length) {
                rotateImg = 0;
            }
        }
    } 
    ngOnInit() {
        // let rotateImg = 0;
        // let lorem = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, seddo eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';
        // let images = [
        //     'bandit',
        //     'batmobile',
        //     'blues-brothers',
        //     'bueller',
        //     'delorean',
        //     'eleanor',
        //     'general-lee',
        //     'ghostbusters',
        //     'knight-rider',
        //     'mirth-mobile'
        // ];
    } 
    
    
}
