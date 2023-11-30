import { TestBed } from '@angular/core/testing';
import { IntervalsComponent } from './intervals.component';
describe('IntervalsComponent', () => {
    let component;
    let fixture;
    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [IntervalsComponent]
        })
            .compileComponents();
        fixture = TestBed.createComponent(IntervalsComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=intervals.component.spec.js.map