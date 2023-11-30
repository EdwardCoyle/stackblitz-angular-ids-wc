import { TestBed } from '@angular/core/testing';
import { IdsCalendarComponent } from './ids-calendar.component';
describe('IdsCalendarComponent', () => {
    let component;
    let fixture;
    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [IdsCalendarComponent]
        })
            .compileComponents();
        fixture = TestBed.createComponent(IdsCalendarComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=ids-calendar.component.spec.js.map