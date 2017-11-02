import { Component, OnInit , Input} from '@angular/core';

@Component({
    selector: 'home-page-cmp',
    moduleId: module.id,
    templateUrl: 'homepage.component.html'
})

export class HomepageComponent{

  @Input() id: string;
  @Input() type: string;

  constructor(){

  }
}
