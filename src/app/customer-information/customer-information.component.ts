import { Component, OnInit } from '@angular/core';
import { UserService } from '../_services/user.service';
import { TokenStorageService } from '../_services/token-storage.service';
import {Router} from "@angular/router"



@Component({
  selector: 'app-board-user',
  templateUrl: './customer-information.component.html',
  styleUrls: ['./customer-information.component.css']
})
export class CustomerInformationComponent implements OnInit {
  content?: any;

  constructor(private userService: UserService,private tokenStorage: TokenStorageService,private router: Router) { }

  ngOnInit(): void {

    if(this.tokenStorage.getUser().userName==null){
      this.router.navigate(['/login']);
    }


    this.userService.getUser(this.tokenStorage.getUser().userName).subscribe({
      next: data => {
        this.content = data;
      },
      error: err => {
        this.content = JSON.parse(err.error).message;
      }
    });
  }
}

