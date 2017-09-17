import { Observable } from 'rxjs';
import { Movie } from './movie';
import { MessageService } from './msg.service';
import { DisplayService } from './display.service';
import { Component,Input } from '@angular/core';



@Component({
    selector: 'search-bar',
    templateUrl: './search.component.html',

})


export class SearchComponent{

    // @Input() query:string;
    query: string;
    y: any;
    constructor (private displayService: DisplayService, private msgService: MessageService){};

    sendMessage( any ):void{
        this.msgService.sendMessage( any );
    }
    
    onSelect():void{ 

        this.displayService.setQuery(this.query); 

        console.log('searchComp:' + this.displayService.query);
        
        var that = this;

        this.displayService.getMovies().then(function(response){
            var x = response;
            that.sendMessage(x);
            return x;
        });
        
    }
    
}

