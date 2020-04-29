import { HeroesComponent } from "./heroes.component"
import { of } from "rxjs";

describe('HeroesComponent',()=>{
    let component : HeroesComponent;
    let HEROES;
    let heroMockService;

    beforeEach(()=>{
        HEROES = [
            { id:1, name: 'Anil', strength:8},            
            { id:2, name: 'Mohan', strength:10},            
            { id:2, name: 'Sunil', strength:15}          
        ]
        heroMockService = jasmine.createSpyObj(['getHeroes', 'addHero', 'deleteHero'])
        component = new HeroesComponent(heroMockService);
    })

    describe('delete',()=>{
        it('should remove the indicated hero from the heroes list',()=>{
            heroMockService.deleteHero.add.returnValue(of(true))
            component.heroes = HEROES;
            component.delete(HEROES[2]);
            expect(component.heroes.length).toBe(2)
        })
    })
})