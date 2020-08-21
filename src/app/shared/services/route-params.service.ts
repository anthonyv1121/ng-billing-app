import { Injectable } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Injectable()
export class RouteParamsService {

  private routeParams:Params;
  private route:ActivatedRoute;
  
  constructor() { }

  public setRoute(route:ActivatedRoute) {
    this.route = route;
    this.route.params.pipe().subscribe(params => {
      this.routeParams = params
    })
  }

  get year():string{
    return this.routeParams['year']
  }
  get clientId():string{
    return this.routeParams['clientId']
  }
  get date():string{
    return this.routeParams['date']
  }
  get id():string{
    return this.routeParams['id']
  }

}
