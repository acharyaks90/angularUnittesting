import { ComponentFixture, TestBed } from "@angular/core/testing"
import { HeroesComponent } from "./heroes.component"
import { NO_ERRORS_SCHEMA } from "@angular/core";
import { HeroService } from "../hero.service";
import { of } from "rxjs";

describe('heroes component ',()=>{
    
    let fixture : ComponentFixture<HeroesComponent>;
    let mockHeroService
    let HEROES;
    beforeEach(()=>{
        HEROES = [{id:1,name:'anil',strength:4},{id:2,name:'anil',strength:4},{id:3,name:'anil',strength:4},{id:4,name:'anil',strength:4}]
        mockHeroService = jasmine.createSpyObj(['getHeroes','addHero','delete'])
        TestBed.configureTestingModule({
            declarations: [HeroesComponent],
            providers:[
                { provide: HeroService, useValue:mockHeroService}],
            schemas:[NO_ERRORS_SCHEMA]
        })

        fixture = TestBed.createComponent(HeroesComponent);

        it('should do nothing',()=>{
            expect(true).toBe(true);
        })

        it('should set heroes correctly from service',()=>{
            mockHeroService.getHeroes.and.returnValue(of(HEROES))
            fixture.detectChanges();
            expect(fixture.componentInstance.heroes.length).toBe(2);
        })
    })
})