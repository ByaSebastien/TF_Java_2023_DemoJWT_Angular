import { Component, OnInit } from '@angular/core';
import { Link } from '../models/link';
import { SessionService } from '../services/session.service';
import { UserTokenDTO } from '../models/userTokenDTO';
import { RoleType } from '../models/enums/roleType';



const anonymousNav: Link[] = [
  { title: 'Home', url: "home" },
  { title: 'Register', url: 'register' },
  { title: 'Login', url: 'login' }
]
const userNav: Link[] = [
  { title: 'Home', url: "home" },
  { title: 'Book', url: 'book' }
]
const adminNav: Link[] = [
  { title: 'Home', url: "home" },
  { title: 'Book', url: 'book' },
  { title: 'Create Book', url: 'book/add' }
]

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  links!: Link[];
  logged!: boolean
  currentUser: UserTokenDTO | undefined

  constructor(
    private readonly _sessionService: SessionService
  ) { }

  ngOnInit(): void {
    this._sessionService.data$.subscribe({
      next: (data) => {
        this.currentUser = data;
        this.logged = data !== undefined;
        this.links = this.currentUser?.role === RoleType.ADMIN ? adminNav : (this.currentUser?.role === RoleType.USER ? userNav : anonymousNav)
      }
    })
  }

  logout() {
    this._sessionService.stop();
  }
}
