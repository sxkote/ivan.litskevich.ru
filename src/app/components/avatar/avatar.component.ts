import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-avatar',
  templateUrl: './avatar.component.html',
  styleUrls: ['./avatar.component.css']
})
export class AvatarComponent implements OnInit {
  @Input() url: string = "";
  @Input() title: string|undefined;

  constructor() {
  }

  ngOnInit(): void {
  }

}
