import {TestBed, ComponentFixture} from '@angular/core/testing';
import { HeroComponent} from './hero.component'
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { By } from '@angular/platform-browser';

describe('HeroComponent Shallow test',()=>{
    let fixture: ComponentFixture<HeroComponent> ;
    beforeEach(()=>{
        TestBed.configureTestingModule({
            declarations: [HeroComponent],
            schemas:[NO_ERRORS_SCHEMA]
        })

        fixture = TestBed.createComponent(HeroComponent);

       
    })

    it('should have the correct hero',()=>{
        fixture.componentInstance.hero = { id:1, name: 'Anil', strength: 3}

        expect(fixture.componentInstance.hero.name).toEqual('Anil');
    })

    it('should have render the hero name in anchor', ()=>{
        fixture.componentInstance.hero = { id:1, name: 'Anil', strength: 3}
        fixture.detectChanges();
        expect(fixture.debugElement.query(By.css('a')).nativeElement.textContent).toContain('Anil')
        expect(fixture.nativeElement.querySelector('a').textContent).toContain('Anil')

    })
})