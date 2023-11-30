import { TestBed } from '@angular/core/testing';
import { LocalizedDatesComponent } from './localized-dates.component';
describe('LocalizedDatesComponent', () => {
    let component;
    let fixture;
    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [LocalizedDatesComponent]
        })
            .compileComponents();
        fixture = TestBed.createComponent(LocalizedDatesComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=localized-dates.component.spec.js.map