import { Movie } from './movie';
import { MessageService } from './msg.service';
import { DisplayService } from './display.service';
import { Component,OnInit } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import {OnDestroy} from '@angular/core';

@Component({
    selector: 'dashboard',
    templateUrl: './dashboard.component.html',
    // styleUrls: './dashboard.component.css',
    
})



// export class DashboardComponent implements OnInit{

//     constructor (private displayService: DisplayService){};

//     ngOnInit():void{
//         if(this.displayService.query){
//             console.log(this.displayService.getMovies());
//         }
//     }
// }

export class DashboardComponent implements OnDestroy {
    message: any;
    subscription: Subscription;

    constructor(private messageService: MessageService) {
        // subscribe to home component messages
        this.subscription = this.messageService.getMessage().subscribe(message => { this.message = message; });
    }
 
   
    ngOnDestroy() {
        // unsubscribe to ensure no memory leaks
        this.subscription.unsubscribe();
    }
}