import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  redirectToHome() {
    this.router.navigate(['/home']);
  }
  redirectToUser() {
    this.router.navigate(['/users']);
  }
  redirectToContact() {
    this.router.navigate(['/contact']);
  }
}
